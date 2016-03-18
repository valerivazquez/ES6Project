let mongoCol1 = "counters"
let Q = require('q');
let moment = require('moment');

// cambio conexiones
// var mongodb = require('./mongodb.js');
let mongodb= "";

exports.init = function (mongo) {
    mongodb = mongo;
};

exports.getNextSequence = function(name) {
   return mongodb.findAndModify(mongoCol1,
          {
            query: { _id: name },
            update: { $inc: { seq: 1 } },
            options: {new: true}
          });
   
}





exports.findingAll = function () {
	return mongodb.finding(mongoCol1, {
//		usuario: usuario
	});
}

exports.findingDatosByFecha = function (fecha_closed) {
	return mongodb.finding(mongoCol1, {
		fecha: fecha_closed
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