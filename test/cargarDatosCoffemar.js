var moment = require('moment');

var cargarDatos = function(db, callback) {
  
  var collection = db.collection('datos');
  var date_closed = moment([2015, 2, 1, 12]);

  collection.drop();
  collection.insert([
    
    {
    	fecha		  : moment("2015-03-01T10:00:00+00:00").toDate(),
    	ingresoVenta     : 136651,
    	gastoCompra      : 70793,
    	gastoPersonal    : 35236,
      gastoExplotacion : 18702,
      impagos          : 0
    },
    {
      fecha     : moment("2015-02-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 90404,
      gastoCompra      : 40035,
      gastoPersonal    : 24065,
      gastoExplotacion : 10076,
      impagos          : 0
    },
    {
      fecha     : moment("2015-01-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 44722,
      gastoCompra      : 19189,
      gastoPersonal    : 11664,
      gastoExplotacion : 3777,
      impagos          : 0
    },
  ], function(err, result) {
    console.log("CargaDatos was succesfully");
    callback(result);
  });
}


var MongoClient = require('mongodb').MongoClient;
 

// Connection URL
//var url = 'mongodb://localhost:27017/mebsc';
var url = 'mongodb://mebsc:mebsc@ds045622.mongolab.com:045622/mebsc-pilot';

//var url = 'mongodb://mebsc:mebsc@ds045622.mongolab.com:45622/mebsc-hsn';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server");
  cargarDatos(db, function() {
    db.close();
  });
});