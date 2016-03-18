var Q = require('q');
var config = require('../../server/config');
// var mondodb = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var Mongodb = require('mongodb');


var mongoUrl = "mongodb://" + config.MONGO_URI;
var _db = "";


//exports.ObjectId = mondodb.ObjectID; !!!OJO 
exports.connecting = connecting;
exports.finding = finding;
exports.findAndModify = findAndModify;
exports.ObjectId = ObjectId;
exports.inserting = inserting;
exports.updating = updating;
exports.saving = saving;
exports.deletingOne = deletingOne;



function connecting(mongoCol) {
	var deferred = Q.defer();

	if (_db == ""){
		MongoClient.connect(mongoUrl, function (err, db) {
			if (err) {
				callback2PromiseConnect(err, null, null, deferred);
			} else {
				callback2PromiseConnect(null, db.collection(mongoCol), db, deferred);
			}
		});
	}
	else{
		callback2PromiseConnect(null, _db.collection(mongoCol), _db, deferred);
	}

	return deferred.promise;
}

function ObjectId(blogId){
	console.log(typeof blogId);
	return new Mongodb.ObjectId(blogId);
}


function finding(mongoCol, query) {
	var deferred = Q.defer();
	console.log(query);
	connecting(mongoCol)
		.then(function (colDb) {
			colDb.find(query).toArray(function (err, result) {
				callback2Promise(err, result, deferred);
			});
		})
		.fail(function (err) {
			callback2Promise(err, result, deferred);
		});
	return deferred.promise;
}

function findAndModify(mongoCol, query) {
	var deferred = Q.defer();
	connecting(mongoCol)
		.then(function (colDb) {
			console.log('Query:', query)
			colDb.findAndModify(query.query,[],query.update, query.options, function (err, result) {
				callback2Promise(err, result, deferred);
			});
		})
		.fail(function (err) {
			callback2Promise(err, result, deferred);
		});
	return deferred.promise;
}



function inserting(mongoCol, document) {
	var deferred = Q.defer();

	connecting(mongoCol)
		.then(function (colDb) {
			colDb.insert(document, function (err, result) {
				callback2Promise(err, result, deferred);
			});
		})
		.fail(function (err) {
			callback2Promise(err, result, deferred);
		});
	return deferred.promise;
}

function saving(mongoCol, document) {
	var deferred = Q.defer();
	connecting(mongoCol)
		.then(function (colDb) {
			colDb.save(document, function (err, result) {
				callback2Promise(err, result, deferred);
			});
		})
		.fail(function (err) {
			callback2Promise(err, result, deferred);
		});
	return deferred.promise;
}

function updating(mongoCol, query, document) {
	var deferred = Q.defer();
	connecting(mongoCol)
		.then(function (colDb) {
			colDb.update(query, document, function (err, result) {
				callback2Promise(err, result, deferred);
			});
		})
		.fail(function (err) {
			callback2Promise(err, result, deferred);
		});
	return deferred.promise;
}



function deletingOne(mongoCol, query) {
	var deferred = Q.defer();
	connecting(mongoCol)
		.then(function (colDb) {
			colDb.remove(query, { justOne: true }, function (err, result) {
				callback2Promise(err, result, deferred);
			});
		})
		.fail(function (err) {
			callback2Promise(err, result, deferred);
		});
	return deferred.promise;
}


function callback2PromiseConnect(err, result, db, deferred) {

	if (err) {
		console.error(err);
		deferred.reject(err);
	} else {
		_db = db;
		deferred.resolve(result);
	}
}


function callback2Promise(err, result, deferred) {
	if (err) {
		console.error(err);
		deferred.reject(err);
	} else {
		deferred.resolve(result);
	}
}




