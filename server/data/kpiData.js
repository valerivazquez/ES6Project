// cambio conexiones
// var mongodb = require('./mongodb.js');
var mongodb= "";

exports.init = function (mongo) {
    mongodb = mongo;
};

var mongoCol = "kpi";
var Q = require('q');

exports.findingKpi = function() {
	return mongodb.finding(mongoCol, {
	});
}

exports.savingKpi = function (data) {

	var kpi ={}
	kpi.fecha = new Date()
	kpi.tile = data.title
	kpi.description = data.description
	kpi.unit = data.unit
	kpi.frecuency = data.frecuency
	kpi.category = data.category
	kpi.perspective = data.perspective
	kpi.reference = data.reference
	kpi.iniciatives = data.iniciatives
	kpi.responsible =data.responsible
	
	return mongodb.saving(mongoCol, kpi);
	
}

var findingByIdKpi = function (id_kpi) {
	return mongodb.finding(mongoCol, {
		_id: Number(id_kpi)
//		_id: new mongodb.ObjectId(id_kpi)

	});
}

