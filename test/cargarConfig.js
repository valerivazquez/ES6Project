var moment = require('moment');

var cargarConfig = function(db, callback) {
  
  var collection = db.collection('config');
//  var date_closed = moment([2015, 4, 1, 12]);
  var date_closed = moment("2015-05-01T10:00:00+00:00")
//  var date_closed = moment([2014, 5, 1, 12]);

  collection.drop();

  collection.insert([
    {
      _id       : 1,
    	fecha		  : date_closed.clone().toDate(),
    	empresa   : 'PimPam',
    },


  ], function(err, result) {
    console.log("CargaConfig was succesfully");
    callback(result);
  });
}


var MongoClient = require('mongodb').MongoClient;
 

// Connection URL
var MONGO_URI= process.env.MONGO_URI || 'localhost:27017/mebsc'
var url = "mongodb://" + MONGO_URI;
//var url = 'mongodb://localhost:27017/mebsc';
//var url = 'mongodb://mebsc:mebsc@ds045622.mongolab.com:45622/mebsc-hsn';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server");
  cargarConfig(db, function() {
    db.close();
  });
});