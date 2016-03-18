var mongoCol1 = "blogs"
var Q = require('q');
var moment = require('moment');

// cambio conexiones
// var mongodb = require('./mongodb.js');
var mongodb= "";

exports.init = function (mongo) {
    mongodb = mongo;
};

exports.findingAll = function () {
	return mongodb.finding(mongoCol1, {
//		usuario: usuario
	});
}

exports.findingById = function (blogId) {
	return mongodb.finding(mongoCol1, {
//		_id: mongodb.ObjectId(blogId)
	_id: Number.parseInt(blogId)

	});
}

exports.findingDatosByFecha = function (fecha_closed) {
	return mongodb.finding(mongoCol1, {
		fecha: fecha_closed
	});
}


exports.deletingById = function (blogId) {
	return mongodb.deletingOne(mongoCol1, {
		_id: Number.parseInt(blogId)
	});
}



exports.deletingDatosByFecha = function (fecha_closed) {
	return mongodb.deletingOne(mongoCol1, {
		fecha: fecha_closed
	});
}



exports.findingLabels = function () {
	return mongodb.finding(mongoCol2, {
//		usuario: usuario
	});
}


exports.insertingDatos = function (dato) {

	delete dato.any 
	delete dato.mes

	return mongodb.inserting(mongoCol1, dato);
}

exports.updatingById = function (_id, blog) {
    //delete dato._id;
   	
	return mongodb.updating(mongoCol1, {
		_id: _id}, blog);
}


exports.findingByIdUsuario = function (_id, usuario) {
	return mongodb.finding(mongoCol, {
		_id: new mongodb.ObjectId(_id),
		usuario: usuario
	});
}






/*
|--------------------------------------------------------------------------
| Generate datos of fecha
|--------------------------------------------------------------------------
 */
exports.generateDatos = function (fecha) {
	var deferred = Q.defer();
	exports.findingDatos()
		.then(function (data) {
			deferred.resolve(generateHorizon(data, fecha));
		})
		.fail(function (err) {
			deferred.reject(err);
		});
	return deferred.promise;
}

/*
|--------------------------------------------------------------------------
| Generate array of datos with every of 12 last monts from fecha
|--------------------------------------------------------------------------
 */
var generateHorizon = function(data, fecha) {
// Produce array with the last 12 motnh until fecha

	var horizon = new Array();
	var ingresoVenta = new Array();
	var gastoCompra = new Array();
	var gastoPersonal = new Array();
	var gastoExplotacion = new Array();
	var beneficio = new Array()

    fecha.setMonth(fecha.getMonth() + 1)
	
	for(var i=11;i>=0;i--){

	    fecha.setMonth(fecha.getMonth() - 1)
	    fecha.setUTCHours(10);

		var result = data.filter(function( data ) {
  			return data.fecha.getTime() == fecha.getTime();
		});

		if (result.length == 0){
			console.log("Fechas sin Registro", fecha)
			ingresoVenta[i]=0;
			gastoCompra[i]=0;
			gastoPersonal[i]=0;
			gastoExplotacion[i]=0;
			beneficio[i]=0
		}
		else{
			ingresoVenta[i]=result[0].ingresoVenta;
			gastoCompra[i]=result[0].gastoCompra;
			gastoPersonal[i]=result[0].gastoPersonal;
			gastoExplotacion[i]=result[0].gastoExplotacion;
			beneficio[i]=ingresoVenta[i] - gastoCompra[i]-gastoPersonal[i]-gastoExplotacion[i]
		}


	};

	horizon[0] = ingresoVenta;
	horizon[1] = gastoCompra;
	horizon[2] = gastoPersonal;
	horizon[3] = gastoExplotacion;
	horizon[4] = beneficio;


	return horizon

}

/*
|--------------------------------------------------------------------------
| Generate datos for acumulate de last 12 months by fecha
|--------------------------------------------------------------------------
 */
var generateYear = function (data, fecha) {
			
    var wfecha = new Date(fecha);
	valor = generateHorizon(data, wfecha);
	var datos = {};
	
	datos.ingresoVenta = valor[0].reduce(function(a,b) {
	  return a + b
	})

	datos.gastoCompra = valor[1].reduce(function(a,b) {
	  return a + b
	})
	
	datos.gastoPersonal = valor[2].reduce(function(a,b) {
	  return a + b
	})

	datos.gastoExplotacion = valor[3].reduce(function(a,b) {
	  return a + b
	})

	datos.beneficio = valor[4].reduce(function(a,b) {
	  return a + b
	})

	return datos;
}


/*
|--------------------------------------------------------------------------
| Generate array(0-11) from fecha to fecha - 12month, 
| where every element has the accumalte datos from 12 months before.
|--------------------------------------------------------------------------
 */

exports.acumYear = function (fechaInit) {
	var deferred = Q.defer();
	var acum = [];

	exports.findingDatos()
		.then(function (data) {
		    fechaInit.setMonth(fechaInit.getMonth() + 1)
			for(var i=11;i>=0;i--){
			    fechaInit.setMonth(fechaInit.getMonth() - 1)
    			var fechaW = new Date(fechaInit);
    			acum[i] = generateYear(data,fechaW);
			}
			
			deferred.resolve(acum);
		})
		.fail(function (err) {
			deferred.reject(err);
		});
	return deferred.promise;
}

/*
|--------------------------------------------------------------------------
| Generate datos of the month and the month before
|--------------------------------------------------------------------------
 */
var generateMonth = function(data, fecha) {
	var datos = {}
	
	fecha.setUTCHours(10);
	var result = data.filter(function( data ) {
		return data.fecha.getTime() == fecha.getTime();
		});

	var month_before = new Date(fecha);
	month_before.setMonth(month_before.getMonth() -1)
	month_before.setUTCHours(10);

	var reference = data.filter(function( data ) {
		return data.fecha.getTime() == month_before.getTime();
		});
	
	if (result.length == 0){
		datos.impagos = 0;
		datos.impagosBefore = 0;
		datos.IngresoVenta = 0;
		datos.IngresoVentaBefore = 0;
	}
	else{
		datos.impagos = result[0].impagos
		datos.impagosBefore = reference[0].impagos
		datos.ingresoVenta = result[0].ingresoVenta;
		datos.ingresoVentaBefore = reference[0].ingresoVenta;
	}
	return datos

}

/*
|--------------------------------------------------------------------------
| Generate array(0-11) from fecha to fecha - 12month, 
| where every element has datos of the month and the month before.
|--------------------------------------------------------------------------
 */
exports.acumMonth = function (fechaMonth) {
	var deferred = Q.defer();
	var acum = [];
	exports.findingDatos()
		.then(function (data) {
			fechaMonth.setMonth(fechaMonth.getMonth() + 1)
			for(var i=11;i>=0;i--){
				fechaMonth.setMonth(fechaMonth.getMonth() -1)
				var fechaW = new Date(fechaMonth);
				acum[i] = generateMonth(data,fechaW);
			}
			deferred.resolve(acum);
		})
		.fail(function (err) {
			deferred.reject(err);
		});
	return deferred.promise;
}

