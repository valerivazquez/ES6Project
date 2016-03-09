var moment = require('moment');

var cargarDatos = function(db, callback) {
  
  var collection = db.collection('datos');
  var date_closed = moment([2015, 2, 1, 12]);

  collection.drop();
  collection.insert([
    {
      fecha     : moment([2015, 4, 1, 12]).toDate(),
      ingresoVenta     : 60645.95,
      gastoCompra      : 7113.68,
      gastoPersonal    : 22158.32,
      gastoExplotacion : 8867.63,
      impagos          : 2100
    },
    {
      fecha     : moment([2015, 3, 1, 12]).toDate(),
      ingresoVenta     : 94261.08,
      gastoCompra      : 37841.20,
      gastoPersonal    : 21020.05,
      gastoExplotacion : 11609.62,
      impagos          : 2100
    },
    {
    	fecha		  : moment([2015, 2, 1, 12]).toDate(),
    	ingresoVenta     : 52714.45,
    	gastoCompra      : 20582.88,
    	gastoPersonal    : 42456.80,
      gastoExplotacion : 8925.77,
      impagos          : 2100
    },
    {
      fecha     : moment([2015, 1, 1, 12]).toDate(),
      ingresoVenta     : 41620.06,
      gastoCompra      : 8360.53,
      gastoPersonal    : 21825.58,
      gastoExplotacion : 13020.67,
      impagos          : 3100
    },
    {
      fecha     : moment([2015, 0, 1, 12]).toDate(),
      ingresoVenta     : 21283.54,
      gastoCompra      : 6851.46,
      gastoPersonal    : 24849.39,
      gastoExplotacion : 13590.29,
      impagos          : 2100
    },
    {
      fecha     : moment([2014, 0, 1, 12]).toDate(),
      ingresoVenta     : 45276.70,
      gastoCompra      : 11232.83,
      gastoPersonal    : 25425.05,
      gastoExplotacion : 9839.66,
      impagos          : 2100
    },
    {
      fecha     : moment([2014, 1, 1, 12]).toDate(),
      ingresoVenta     : 56183.61,
      gastoCompra      : 14167.64,
      gastoPersonal    : 24309.99,
      gastoExplotacion : 17782.20,
      impagos          : 2100
    },
    {
      fecha     : moment([2014, 2, 1, 12]).toDate(),
      ingresoVenta     : 41507.41,
      gastoCompra      : 4580.86,
      gastoPersonal    : 24244.38,
      gastoExplotacion : 7391.35,
      impagos          : 2100
    },
    {
      fecha     : moment([2014, 3, 1, 12]).toDate(),
      ingresoVenta     : 66957.56,
      gastoCompra      : 20994.31,
      gastoPersonal    : 24639.43,
      gastoExplotacion : 12685.90,
      impagos          : 2100
    },
    {
      fecha     : moment([2014, 4, 1, 12]).toDate(),
      ingresoVenta     : 66979.83,
      gastoCompra      : 26414.88,
      gastoPersonal    : 25143.85,
      gastoExplotacion : 11363.17,
      impagos          : 2100
    },
    {
      fecha     : moment([2014, 5, 1, 12]).toDate(),
      ingresoVenta     : 64775.82,
      gastoCompra      : 16305.61,
      gastoPersonal    : 44629.87,
      gastoExplotacion : 7413.52,
      impagos          : 2100
    },
    {
      fecha     : moment([2014, 6, 1, 12]).toDate(),
      ingresoVenta     : 59969.14,
      gastoCompra      : 28068.65,
      gastoPersonal    : 26521.42,
      gastoExplotacion : 16693.11,
      impagos          : 2100
    },
    {
      fecha     : moment([2014, 7, 1, 12]).toDate(),
      ingresoVenta     : 39161.51,
      gastoCompra      : 10541.51,
      gastoPersonal    : 27400.67,
      gastoExplotacion : 13920.88,
      impagos          : 2100
    },
    {
      fecha     : moment([2014, 8, 1, 12]).toDate(),
      ingresoVenta     : 27309.48,
      gastoCompra      : 1510.41,
      gastoPersonal    : 23328.28,
      gastoExplotacion : 10019.62,
      impagos          : 2100
    },
    {
      fecha     : moment([2014, 9, 1, 12]).toDate(),
      ingresoVenta     : 46071.13,
      gastoCompra      : 12286.90,
      gastoPersonal    : 24207.39,
      gastoExplotacion : 19431.09,
      impagos          : 2100
    },
    {
      fecha     : moment([2014, 12, 1, 12]).toDate(),
      ingresoVenta     : 41107.78,
      gastoCompra      : 17651.86,
      gastoPersonal    : 23875.23,
      gastoExplotacion : 13705.90,
      impagos          : 2100
    },
    {
      fecha     : moment([2014, 11, 1, 12]).toDate(),
      ingresoVenta     : 30004.30,
      gastoCompra      : 3811.28,
      gastoPersonal    : 39825.29,
      gastoExplotacion : 2219.24,
      impagos          : 2100
    },
    {
      fecha     : moment([2013, 0, 1, 12]).toDate(),
      ingresoVenta     : 32512.53,
      gastoCompra      : 10586.81,
      gastoPersonal    : 23673.97,
      gastoExplotacion : 14308.37,
      impagos          : 2100
    },
    {
      fecha     : moment([2013, 1, 1, 12]).toDate(),
      ingresoVenta     : 23507.02,
      gastoCompra      : 4676.47,
      gastoPersonal    : 23199.84,
      gastoExplotacion : 14545.54,
      impagos          : 2100
    },
    {
      fecha     : moment([2013, 2, 1, 12]).toDate(),
      ingresoVenta     : 27649,
      gastoCompra      : 4088.57,
      gastoPersonal    : 22923.14,
      gastoExplotacion : 8701.98,
      impagos          : 2100
    },
    {
      fecha     : moment([2013, 3, 1, 12]).toDate(),
      ingresoVenta     : 29782.69,
      gastoCompra      : 23561.56,
      gastoPersonal    : 12063.74,
      gastoExplotacion : 12,
      impagos          : 2100
    },
    {
      fecha     : moment([2013, 4, 1, 12]).toDate(),
      ingresoVenta     : 54558.29,
      gastoCompra      : 14902.57,
      gastoPersonal    : 22660.11,
      gastoExplotacion : 9982.55,
      impagos          : 2100
    },
    {
      fecha     : moment([2013, 5, 1, 12]).toDate(),
      ingresoVenta     : 60969.84,
      gastoCompra      : 25624.41,
      gastoPersonal    : 38885.20,
      gastoExplotacion : 16059.18,
      impagos          : 2100
    },
    {
      fecha     : moment([2013, 6, 1, 12]).toDate(),
      ingresoVenta     : 102391.59,
      gastoCompra      : 38310.66,
      gastoPersonal    : 22977.53,
      gastoExplotacion : 19464.28,
      impagos          : 2100
    },
    {
      fecha     : moment([2013, 7, 1, 12]).toDate(),
      ingresoVenta     : 49123.80,
      gastoCompra      : 9216.24,
      gastoPersonal    : 23215.05,
      gastoExplotacion : 1043.37,
      impagos          : 2100
    },
    {
      fecha     : moment([2013, 8, 1, 12]).toDate(),
      ingresoVenta     : 27028.70,
      gastoCompra      : 5655.82,
      gastoPersonal    : 22740.67,
      gastoExplotacion : 16692.83,
      impagos          : 2100
    },
    {
      fecha     : moment([2013, 9, 1, 12]).toDate(),
      ingresoVenta     : 73861.23,
      gastoCompra      : 13791.70,
      gastoPersonal    : 23200.63,
      gastoExplotacion : 8818.84,
      impagos          : 2100
    },
    {
      fecha     : moment([2013, 12, 1, 12]).toDate(),
      ingresoVenta     : 45167.76,
      gastoCompra      : 16677.15,
      gastoPersonal    : 24515.69,
      gastoExplotacion : 8511.15,
      impagos          : 2100
    },
    {
      fecha     : moment([2013, 11, 1, 12]).toDate(),
      ingresoVenta     : 51294.15,
      gastoCompra      : 9554.78,
      gastoPersonal    : 38863.18,
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
//var url = 'mongodb://localhost:27017/mebsc';
var url = 'mongodb://mebsc:mebsc@ds045622.mongolab.com:45622/mebsc-hsn';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server");
  cargarDatos(db, function() {
    db.close();
  });
});