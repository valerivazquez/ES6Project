var mongodb = require('./mongodb.js')
var mongoCol1 = "datos"
var mongoCol2 = "labels"
var Q = require('q');
var moment = require('moment');



var findingDatos = function () {
	return mongodb.finding(mongoCol1, {
//		usuario: usuario
	});
}

var findingDatosByFecha = function (fecha_closed) {
	return mongodb.finding(mongoCol1, {
		fecha: fecha_closed
	});
}




exports.generateHorizon = function(data) {
//	var deferred = Q.defer();
	
	var horizon = new Array();
	var ingresoVenta = new Array();
	var gastoCompra = new Array();
	var gastoPersonal = new Array();
	var gastoExplotacion = new Array();

	console.log("Config:", data);

	var data_closed = moment(data[0].fecha).add(1,'month');

	for(var i=11;i>=0;i--){

		data_closed.subtract(1,'month');
		console.log("Indice:", i);
		findingDatosByFecha(data_closed.toDate())
			.then(function (data, i) {
				console.log("G:", i, "Fecha",data[0].fecha, "Venta:", data[0].ingresoVenta)
				ingresoVenta[i]=data[0].ingresoVenta;
				gastoCompra[i]=data[0].gastoCompra;
				gastoPersonal[i]=data[0].gastoPersonal;
				gastoExplotacion[i]=data[0].gastoExplotacion;
				if (ingresoVenta.length == 11){
					horizon[0] = ingresoVenta;
					horizon[1] = gastoCompra;
					horizon[2] = gastoPersonal;
					horizon[3] = gastoExplotacion;
					console.log("TOTAL:", horizon);
					deferred.resolve(generateHorizon(data));
				}

			})
			.fail(function (err) {
				console.log("generate-Horizon-Bucle-3")
				deferred.reject(err);
			});

	};

//	return deferred.promise;


}


/*
exports.horizonDatos = function () {
	var deferred = Q.defer();
	findingConfig()
		.then(function (data) {
			deferred.resolve(generateHorizon(data));
		})
		.fail(function (err) {
			deferred.reject(err);
		});
	return deferred.promise;
}
*/

exports.findingLabels = function () {
	return mongodb.finding(mongoCol2, {
//		usuario: usuario
	});
}


exports.insertingDatos = function (dato) {


	console.log("Dato:" + dato.any)
	console.log("Dato:" + dato.mes)

	
	var newFecha = new Date(dato.any, dato.mes-1,1, 12)
	console.log("newFecha:" + newFecha)
	dato.fecha = newFecha
	delete dato.any 
	delete dato.mes

/*
	dato_O.ingresoVentas  = dato.ingresoVentas
	dato_O.gastoPersonal  = dato.gastoPersonal
    dato_O.gastoCompras	  = dato.gastoCompras
    dato_O.gastoSuministro= dato.gastoSuministro
    dato_O.gastoFijos     = dato.gastoFijos 
    dato_O.gastoAmort	  = dato.gastoAmort
*/
	return mongodb.inserting(mongoCol1, dato);
}

exports.findingByIdUsuario = function (_id, usuario) {
	return mongodb.finding(mongoCol, {
		_id: new mongodb.ObjectId(_id),
		usuario: usuario
	});
}