var moment = require('moment');

var cargarDatos = function(db, callback) {
  
  var collection = db.collection('datosm');
  var date_closed = moment([2015, 2, 1, 12]);

  collection.drop();
  collection.insert([
    {
      fecha     : moment("2015-09-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 37152.49,
      gastoCompra      : 18045.69,
      gastoPersonal    : 21954.21,
      gastoExplotacion : 11668.88,
      impagos          : 2100
    },
    {
      fecha     : moment("2015-08-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 60775.07,
      gastoCompra      : 13179.68,
      gastoPersonal    : 24449.93,
      gastoExplotacion : 9759.08,
      impagos          : 2100
    },
    {
      fecha     : moment("2015-07-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 86371.37,
      gastoCompra      : 35760.71,
      gastoPersonal    : 25841.07,
      gastoExplotacion : 17542.32,
      impagos          : 2100
    },
    {
      fecha     : moment("2015-06-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 48751.37,
      gastoCompra      : 16878.29,
      gastoPersonal    : 37853.13,
      gastoExplotacion : 11435.39,
      impagos          : 2100
    },
    {
      fecha     : moment("2015-05-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 62232.15,
      gastoCompra      : 11079.99,
      gastoPersonal    : 25855.95,
      gastoExplotacion : 14712.79,
      impagos          : 2100
    },
    {
      fecha     : moment("2015-04-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 97431.83,
      gastoCompra      : 37841.20,
      gastoPersonal    : 23848.39,
      gastoExplotacion : 13371.57,
      impagos          : 2100
    },
    {
    	fecha		  : moment("2015-03-01T10:00:00+00:00").toDate(),
    	ingresoVenta     : 53344.45,
    	gastoCompra      : 20582.88,
    	gastoPersonal    : 33306.35,
      gastoExplotacion : 9224.54,
      impagos          : 2100
    },
    {
      fecha     : moment("2015-02-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 41982.56,
      gastoCompra      : 8360.53,
      gastoPersonal    : 22377.56,
      gastoExplotacion : 13089.97,
      impagos          : 3100
    },
    {
      fecha     : moment("2015-01-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 23527.84,
      gastoCompra      : 6851.46,
      gastoPersonal    : 24878.71,
      gastoExplotacion : 13590.29,
      impagos          : 2100
    },
    {
      fecha     : moment("2014-01-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 51852.1,
      gastoCompra      : 11232.83,
      gastoPersonal    : 25838.69,
      gastoExplotacion : 9839.66,
      impagos          : 2100
    },
    {
      fecha     : moment("2014-02-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 60125.01,
      gastoCompra      : 14167.64,
      gastoPersonal    : 25014.68,
      gastoExplotacion : 17782.20,
      impagos          : 2100
    },
    {
      fecha     : moment("2014-03-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 46945.56,
      gastoCompra      : 4580.86,
      gastoPersonal    : 24809.41,
      gastoExplotacion : 7391.35,
      impagos          : 2100
    },
    {
      fecha     : moment("2014-04-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 73481.96,
      gastoCompra      : 20994.31,
      gastoPersonal    : 25530.32,
      gastoExplotacion : 12685.90,
      impagos          : 2100
    },
    {
      fecha     : moment("2014-05-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 79440.83,
      gastoCompra      : 26414.88,
      gastoPersonal    : 26151.11,
      gastoExplotacion : 11363.17,
      impagos          : 2100
    },
    {
      fecha     : moment("2014-06-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 66570.97,
      gastoCompra      : 16305.61,
      gastoPersonal    : 45361.15,
      gastoExplotacion : 7413.52,
      impagos          : 2100
    },
    {
      fecha     : moment("2014-07-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 76136.14,
      gastoCompra      : 28068.65,
      gastoPersonal    : 27299.26,
      gastoExplotacion : 16693.11,
      impagos          : 2100
    },
    {
      fecha     : moment("2014-08-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 41261.55,
      gastoCompra      : 10541.51,
      gastoPersonal    : 27967.47,
      gastoExplotacion : 13920.88,
      impagos          : 2100
    },
    {
      fecha     : moment("2014-09-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 28958.28,
      gastoCompra      : 1510.41,
      gastoPersonal    : 25255.94,
      gastoExplotacion : 10019.62,
      impagos          : 2100
    },
    {
      fecha     : moment("2014-10-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 47435.22,
      gastoCompra      : 12286.90,
      gastoPersonal    : 25202.64,
      gastoExplotacion : 19431.09,
      impagos          : 2100
    },
    {
      fecha     : moment("2014-11-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 42212.78,
      gastoCompra      : 17651.86,
      gastoPersonal    : 25553.13,
      gastoExplotacion : 13705.90,
      impagos          : 2100
    },
    {
      fecha     : moment("2014-12-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 31801.08,
      gastoCompra      : 3811.28,
      gastoPersonal    : 40427.12,
      gastoExplotacion : 2219.24,
      impagos          : 2100
    },
    {
      fecha     : moment("2013-01-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 35583.53,
      gastoCompra      : 10586.81,
      gastoPersonal    : 24791.72,
      gastoExplotacion : 14308.37,
      impagos          : 2100
    },
    {
      fecha     : moment("2013-02-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 26191.27,
      gastoCompra      : 4676.47,
      gastoPersonal    : 23681.75,
      gastoExplotacion : 14545.54,
      impagos          : 2100
    },
    {
      fecha     : moment("2013-03-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 27907,
      gastoCompra      : 4088.57,
      gastoPersonal    : 23484.08,
      gastoExplotacion : 8701.98,
      impagos          : 2100
    },
    {
      fecha     : moment("2013-04-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 34335.99,
      gastoCompra      : 23561.56,
      gastoPersonal    : 12716,
      gastoExplotacion : 12,
      impagos          : 2100
    },
    {
      fecha     : moment("2013-05-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 55428.06,
      gastoCompra      : 14902.57,
      gastoPersonal    : 22964.24,
      gastoExplotacion : 9982.55,
      impagos          : 2100
    },
    {
      fecha     : moment("2013-06-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 64191.93,
      gastoCompra      : 25624.41,
      gastoPersonal    : 40957.64,
      gastoExplotacion : 16059.18,
      impagos          : 2100
    },
    {
      fecha     : moment("2013-07-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 113181.39,
      gastoCompra      : 38310.66,
      gastoPersonal    : 26272.68,
      gastoExplotacion : 19464.28,
      impagos          : 2100
    },
    {
      fecha     : moment("2013-08-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 52505.20,
      gastoCompra      : 9216.24,
      gastoPersonal    : 24186.2,
      gastoExplotacion : 1043.37,
      impagos          : 2100
    },
    {
      fecha     : moment("2013-09-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 29513.15,
      gastoCompra      : 5655.82,
      gastoPersonal    : 25231.37,
      gastoExplotacion : 16692.83,
      impagos          : 2100
    },
    {
      fecha     : moment("2013-10-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 81128.74,
      gastoCompra      : 13791.70,
      gastoPersonal    : 26162.8,
      gastoExplotacion : 8818.84,
      impagos          : 2100
    },
    {
      fecha     : moment("2013-11-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 46257.76,
      gastoCompra      : 16677.15,
      gastoPersonal    : 25426.52,
      gastoExplotacion : 8511.15,
      impagos          : 2100
    },
    {
      fecha     : moment("2013-12-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 55394.86,
      gastoCompra      : 9554.78,
      gastoPersonal    : 40433.03,
      gastoExplotacion : 7466.40,
      impagos          : 2100
    },



  ], function(err, result) {
    console.log("CargaDatos was succesfully");
    callback(result);
  });
}


var MongoClient = require('mongodb').MongoClient;
 

// Connection URL
var url = 'mongodb://localhost:27017/mebsc';
//var url = 'mongodb://mebsc:mebsc@ds045622.mongolab.com:45622/mebsc-hsn';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server");
  cargarDatos(db, function() {
    db.close();
  });
});