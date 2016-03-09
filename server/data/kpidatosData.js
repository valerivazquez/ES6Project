var datosData = require('./datosData.js');
var configData = require('./configData.js');

var moment = require('moment');
var Q = require('q');

/*
 |--------------------------------------------------------------------------
 | Create array ok kpi, considering date_close from Config
 |--------------------------------------------------------------------------
 */
exports.obtenerKpi = function (kpi, yearMonth) {
	var deferred = Q.defer();

	if (yearMonth == undefined){
		configData.findingConfig()
			.then(function (data) {
				calculateKpi(kpi, data[0].fecha)
					.then(function (kpi) {
						deferred.resolve(kpi)
					})
					.fail(function (err) {
					deferred.reject(err);
					});
			})
			.fail(function (err) {
				deferred.reject(err);
			});

		
	} else {
		var year = parseInt(yearMonth.substring(0,4));
		var month = parseInt(yearMonth.substring(4,6)) - 1;
		var fecha = moment([year, month, 1, 10]).toDate()

		calculateKpi(kpi, fecha)
			.then(function (kpi) {
				deferred.resolve(kpi)
			})
			.fail(function (err) {
				deferred.reject(err);
			});

	}

	return deferred.promise;

}

/*
 |--------------------------------------------------------------------------
 | Create array ok kpi with result and reference by fecha
 |--------------------------------------------------------------------------
 */
var calculateKpi = function (kpi, fecha) {
	var deferred = Q.defer();
	var result0 = [];
	var result1 = [];
	var result2 = [];
	var result3 = [];
	var result4 = [];
	var result5 = [];
	var result6 = [];


	var reference0 = [];
	var reference1 = [];
	var reference2 = [];
	var reference3 = [];
	var reference4 = [];
	var reference5 = [];
	var reference6 = [];

	fechaMonth = new Date(fecha);
	datosData.acumYear(fecha)
		.then(function (valor) {
			datosData.acumMonth(fechaMonth)
				.then(function (valorMonth) {
					for(var i=0;i<=11;i++){
						// kpi=1. Punto equilibrio = Costes-Fijos / (1 - (Costes variables / Importe ventas))
						result0[i] = valor[i].ingresoVenta;
						reference0[i] = (valor[i].gastoPersonal + valor[i].gastoExplotacion) /  (1 - (valor[i].gastoCompra / valor[i].ingresoVenta))
				
						// kpi=2. Beneficio sobre ventas
						result1[i] = (( valor[i].ingresoVenta - valor[i].gastoCompra - valor[i].gastoPersonal - valor[i].gastoExplotacion) / valor[i].ingresoVenta) * 100
				
						// kpi=3  Compras sobre ventas
						result2[i] = ( valor[i].gastoCompra / valor[i].ingresoVenta) * 100
				
						// kpi=4  Personal sobre ventas
						result3[i] = ( valor[i].gastoPersonal / valor[i].ingresoVenta) * 100
				
						// kpi=5  Explotacion sobre ventas
						result4[i] = ( valor[i].gastoExplotacion / valor[i].ingresoVenta) * 100
						
						// kpi=6  Impagados, result = mes actual, reference = mes anterior 
						result5[i] =  valorMonth[i].impagos
						reference5[i] = valorMonth[i].impagosBefore

						// kpi=7  Ventas, result = mes actual, reference = mes anterior 
						result6[i] =  valorMonth[i].ingresoVenta
						reference6[i] = valorMonth[i].ingresoVentaBefore

					}
					
// adapted reference also to array, from original kpi
					reference1[11] = kpi[1].reference;
					reference2[11] = kpi[2].reference;
					reference3[11] = kpi[3].reference;
					reference4[11] = kpi[4].reference;

					kpi[0].result = result0;
					kpi[0].reference = reference0;
					kpi[1].result = result1;
					kpi[1].reference = reference1;
					kpi[2].result = result2;
					kpi[2].reference = reference2;
					kpi[3].result = result3;
					kpi[3].reference = reference3;
					kpi[4].result = result4;
					kpi[4].reference = reference4;
					kpi[5].result = result5;
					kpi[5].reference = reference5;
					kpi[6].result = result6;
					kpi[6].reference = reference6;
					deferred.resolve(kpi)
				})
				.fail(function (err) {
					deferred.reject(err);
				});
		})
		.fail(function (err) {
				deferred.reject(err);
		});

	return deferred.promise;

}
