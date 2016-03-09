var moment = require('moment');

var cargarDatos = function(db, callback) {
  
  var collection = db.collection('datos');
  var date_closed = moment([2015, 2, 1, 12]);

  collection.drop();
  collection.insert([
    {
    	fecha		  : date_closed.clone().toDate(),
    	ingresoVenta     : 52714.45,
    	gastoCompra      : 20582.88,
    	gastoPersonal    : 42456.80,
      gastoExplotacion : 8925.77
    },
    {
    	fecha      : date_closed.subtract(1,'month').clone().toDate(),
      ingresoVenta     : 41620.06,
      gastoCompra      : 8360.53,
      gastoPersonal    : 21825.58,
      gastoExplotacion : 13020.67
    },
    {
    	fecha      : date_closed.subtract(1,'month').clone().toDate(),
      ingresoVenta     : 21283.54,
      gastoCompra      : 6851.46,
      gastoPersonal    : 24849.39,
      gastoExplotacion : 13590.29
    },
    {
      fecha      : date_closed.subtract(1,'month').clone().toDate(),
      ingresoVenta     : 45276.70,
      gastoCompra      : 11232.83,
      gastoPersonal    : 25425.05,
      gastoExplotacion : 9839.66
    },
    {
      fecha      : date_closed.subtract(1,'month').clone().toDate(),
      ingresoVenta     : 56183.61,
      gastoCompra      : 14167.64,
      gastoPersonal    : 24309.99,
      gastoExplotacion : 17782.20
    },
    {
      fecha      : date_closed.subtract(1,'month').clone().toDate(),
      ingresoVenta     : 41507.41,
      gastoCompra      : 4580.86,
      gastoPersonal    : 24244.38,
      gastoExplotacion : 7391.35
    },
    {
      fecha      : date_closed.subtract(1,'month').clone().toDate(),
      ingresoVenta     : 66957,
      gastoCompra      : 20994.31,
      gastoPersonal    : 24639.43,
      gastoExplotacion : 12685.90
    },
    {
      fecha      : date_closed.subtract(1,'month').clone().toDate(),
      ingresoVenta     : 66979.83,
      gastoCompra      : 26414.88,
      gastoPersonal    : 25143.85,
      gastoExplotacion : 11363.17
    },
    {
      fecha      : date_closed.subtract(1,'month').clone().toDate(),
      ingresoVenta     : 64775.82,
      gastoCompra      : 16305.61,
      gastoPersonal    : 44629.87,
      gastoExplotacion : 7413.52
    },
    {
      fecha      : date_closed.subtract(1,'month').clone().toDate(),
      ingresoVenta     : 59969.14,
      gastoCompra      : 28068.65,
      gastoPersonal    : 26521.42,
      gastoExplotacion : 16693.11
    },
    {
      fecha      : date_closed.subtract(1,'month').clone().toDate(),
      ingresoVenta     : 39161.51,
      gastoCompra      : 10541.51,
      gastoPersonal    : 27400.67,
      gastoExplotacion : 13920.88
    },
    {
      fecha      : date_closed.subtract(1,'month').clone().toDate(),
      ingresoVenta     : 27309.48,
      gastoCompra      : 1510.41,
      gastoPersonal    : 23328.28,
      gastoExplotacion : 10019.62
    },
    {
      fecha      : date_closed.subtract(1,'month').clone().toDate(),
      ingresoVenta     : 46071.13,
      gastoCompra      : 12286.90,
      gastoPersonal    : 24207.39,
      gastoExplotacion : 19431.09
    },
    {
      fecha      : date_closed.subtract(1,'month').clone().toDate(),
      ingresoVenta     : 41107.78,
      gastoCompra      : 17651.86,
      gastoPersonal    : 23875.23,
      gastoExplotacion : 13705.90
    },
    {
      fecha      : date_closed.subtract(1,'month').clone().toDate(),
      ingresoVenta     : 30004.30,
      gastoCompra      : 115045.47,
      gastoPersonal    : 39825.29,
      gastoExplotacion : 2219.24
    },



  ], function(err, result) {
    console.log("CargaDatos was succesfully");
    callback(result);
  });
}


var MongoClient = require('mongodb').MongoClient;
 

// Connection URL
var url = 'mongodb://localhost:27017/mebsc';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server");
  cargarDatos(db, function() {
    db.close();
  });
});