var mongodb = require('./mongodb.js');
var mongoCol = "config";
var Q = require('q');
var moment = require('moment');


exports.findingConfig = function() {
	return mongodb.finding(mongoCol, {
	});
}

var generateHorizon = function(fecha) {
	var data_closed = moment(fecha).add(1,'month');
	var horizon = new Array();
	for(var i=11;i>=0;i--){
		data_closed.subtract(1,'month');
		horizon[i]= data_closed.month()+1 +"/"+
					data_closed.year().toString().slice(-2);
	};

	return horizon;
	
}

exports.horizonLabels = function (fecha) {
	var deferred = Q.defer();
	if (fecha == undefined){
		exports.findingConfig()
			.then(function (data) {
				deferred.resolve(generateHorizon(data[0].fecha));
			})
			.fail(function (err) {
				deferred.reject(err);
			});
	}else {
		var year = parseInt(fecha.substring(0,4));
		var month = parseInt(fecha.substring(4,6)) - 1;
		var date = moment([year, month, 1, 12]).toDate()
		deferred.resolve(generateHorizon(date));
	}
	return deferred.promise;
}

exports.savingConfig = function (config) {

	config._id = 1
	config.fecha = new Date(config.any, config.mes-1,1, 12)
	config.empresa = "PimPam"
	delete config.any 
	delete config.mes


	
	return mongodb.saving(mongoCol, config);
	
}

exports.findingByIdUsuario = function (_id, usuario) {
	return mongodb.finding(mongoCol, {
		_id: new mongodb.ObjectId(_id),
		usuario: usuario
	});
}