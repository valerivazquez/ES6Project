var moment = require('moment');

var cargarDatos = function(db, callback) {
  
  var collection = db.collection('datos');
  var date_closed = moment([2015, 2, 1, 12]);

  collection.drop();
  collection.insert([
    
    {
    	fecha		  : moment("2015-03-01T10:00:00+00:00").toDate(),
    	ingresoVenta     : 83579,
    	gastoCompra      : 41274,
    	gastoPersonal    : 36322,
      gastoExplotacion : 9429,
      impagos          : 0
    },
    {
      fecha     : moment("2015-02-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 81885,
      gastoCompra      : 30840,
      gastoPersonal    : 36556,
      gastoExplotacion : 8331,
      impagos          : 0
    },
    {
      fecha     : moment("2015-01-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 86623,
      gastoCompra      : 38337,
      gastoPersonal    : 36959,
      gastoExplotacion : 7496,
      impagos          : 0
    },
    {
      fecha     : moment("2014-01-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 61611,
      gastoCompra      : 20886,
      gastoPersonal    : 36636,
      gastoExplotacion : 11302,
      impagos          : 0
    },
    {
      fecha     : moment("2014-02-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 43514,
      gastoCompra      : 39183,
      gastoPersonal    : 35773,
      gastoExplotacion : 4948,
      impagos          : 0
    },
    {
      fecha     : moment("2014-03-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 143093,
      gastoCompra      : 42217,
      gastoPersonal    : 38056,
      gastoExplotacion : 8818,
      impagos          : 0
    },
    {
      fecha     : moment("2014-04-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 2904,
      gastoCompra      : 42926,
      gastoPersonal    : 37674,
      gastoExplotacion : 8145,
      impagos          : 0
    },
    {
      fecha     : moment("2014-05-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 2912,
      gastoCompra      : 44820,
      gastoPersonal    : 38439,
      gastoExplotacion : 9525,
      impagos          : 0
    },
    {
      fecha     : moment("2014-06-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 260476,
      gastoCompra      : 41854,
      gastoPersonal    : 39038,
      gastoExplotacion : 7465,
      impagos          : 0
    },
    {
      fecha     : moment("2014-07-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 87545,
      gastoCompra      : 86999,
      gastoPersonal    : 36009,
      gastoExplotacion : 15067,
      impagos          : 0
    },
    {
      fecha     : moment("2014-08-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 80939,
      gastoCompra      : 1218,
      gastoPersonal    : 37016,
      gastoExplotacion : 3695,
      impagos          : 0
    },
    {
      fecha     : moment("2014-09-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 90462,
      gastoCompra      : 48820,
      gastoPersonal    : 37497,
      gastoExplotacion : 8670,
      impagos          : 0
    },
    {
      fecha     : moment("2014-10-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 180243,
      gastoCompra      : 41686,
      gastoPersonal    : 36351,
      gastoExplotacion : 11154,
      impagos          : 0
    },
    {
      fecha     : moment("2014-11-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 46657,
      gastoCompra      : 35524,
      gastoPersonal    : 37576,
      gastoExplotacion : 14874,
      impagos          : 0
    },
    {
      fecha     : moment("2014-12-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 50596,
      gastoCompra      : 40701,
      gastoPersonal    : 37807,
      gastoExplotacion : 11775,
      impagos          : 0
    },
    {
      fecha     : moment("2013-01-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 69062,
      gastoCompra      : -112281,
      gastoPersonal    : 25964,
      gastoExplotacion : 8232,
      impagos          : 0
    },
    {
      fecha     : moment("2013-02-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 42540,
      gastoCompra      : 35313,
      gastoPersonal    : 32429,
      gastoExplotacion : 6207,
      impagos          : 0
    },
    {
      fecha     : moment("2013-03-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 74001,
      gastoCompra      : 43112,
      gastoPersonal    : 31475,
      gastoExplotacion : 7911,
      impagos          : 0
    },
    {
      fecha     : moment("2013-04-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 0,
      gastoCompra      : 44489,
      gastoPersonal    : 31419,
      gastoExplotacion : 4353,
      impagos          : 0
    },
    {
      fecha     : moment("2013-05-01T10:00:00+00:00").toDate(),
        ingresoVenta     : 0,
      gastoCompra      : 52571,
      gastoPersonal    : 35571,
      gastoExplotacion : 6234,
      impagos          : 0
    },
    {
      fecha     : moment("2013-06-01T10:00:00+00:00").toDate(),
        ingresoVenta     : 263718,
      gastoCompra      : 42638,
      gastoPersonal    : 36284,
      gastoExplotacion : 12077,
      impagos          : 0
    },
    {
      fecha     : moment("2013-07-01T10:00:00+00:00").toDate(),
        ingresoVenta     : 830,
      gastoCompra      : 51549,
      gastoPersonal    : 35518,
      gastoExplotacion : 10124,
      impagos          : 0
    },
    {
      fecha     : moment("2013-08-01T10:00:00+00:00").toDate(),
        ingresoVenta     :0 ,
      gastoCompra      : 37706,
      gastoPersonal    : 35504,
      gastoExplotacion : 3276,
      impagos          : 0
    },
    {
      fecha     : moment("2013-09-01T10:00:00+00:00").toDate(),
        ingresoVenta     : 256609,
      gastoCompra      : 43680,
      gastoPersonal    : 35772,
      gastoExplotacion : 14472,
      impagos          : 0
    },
    {
      fecha     : moment("2013-10-01T10:00:00+00:00").toDate(),
        ingresoVenta     : 14046,
      gastoCompra      : 39744,
      gastoPersonal    : 35649,
      gastoExplotacion : 4564,
      impagos          : 0
    },
    {
      fecha     : moment("2013-11-01T10:00:00+00:00").toDate(),
        ingresoVenta     : 584,
      gastoCompra      : 46279,
      gastoPersonal    : 35316,
      gastoExplotacion : 14945,
      impagos          : 0
    },
    {
      fecha     : moment("2013-12-01T10:00:00+00:00").toDate(),
        ingresoVenta     : 246027,
      gastoCompra      : 99209,
      gastoPersonal    : 36457,
      gastoExplotacion : 9306,
      impagos          : 0
    },
    {
      fecha     : moment("2012-01-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 2976,
      gastoCompra      : 31992,
      gastoPersonal    : 23755,
      gastoExplotacion : 7957,
      impagos          : 0
    },
      {
      fecha     : moment("2012-02-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 2769,
      gastoCompra      : 33383,
      gastoPersonal    : 23436,
      gastoExplotacion : 4924,
      impagos          : 0
    },
    {
      fecha     : moment("2012-03-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 240197,
      gastoCompra      : 41303,
      gastoPersonal    : 24024,
      gastoExplotacion : 4041,
      impagos          : 0
    },
    {
      fecha     : moment("2012-04-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 0,
      gastoCompra      : 30523,
      gastoPersonal    : 27340,
      gastoExplotacion : 5209,
      impagos          : 0
    },
    {
      fecha     : moment("2012-05-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 0,
      gastoCompra      : 50204,
      gastoPersonal    : 27829,
      gastoExplotacion : 5069,
      impagos          : 0
    },
    {
      fecha     : moment("2012-06-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 273913,
      gastoCompra      : 40207,
      gastoPersonal    : 27701,
      gastoExplotacion : 4921,
      impagos          : 0
    },
    {
      fecha     : moment("2012-07-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 11483,
      gastoCompra      : 46759,
      gastoPersonal    : 28361,
      gastoExplotacion : 4577,
      impagos          : 0
    },
    {
      fecha     : moment("2012-08-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 2299,
      gastoCompra      : 36179,
      gastoPersonal    : 32894,
      gastoExplotacion : 3167,
      impagos          : 0
    },
    {
      fecha     : moment("2012-09-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 279913,
      gastoCompra      : 43076,
      gastoPersonal    : 33051,
      gastoExplotacion : 33051,
      impagos          : 0
    },
    {
      fecha     : moment("2012-10-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 0,
      gastoCompra      : 43761,
      gastoPersonal    : 32426,
      gastoExplotacion : 3861,
      impagos          : 0
    },
    {
      fecha     : moment("2012-11-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 0,
      gastoCompra      : 36805,
      gastoPersonal    : 31735,
      gastoExplotacion : 7195,
      impagos          : 0
    },
    {
      fecha     : moment("2012-12-01T10:00:00+00:00").toDate(),
      ingresoVenta     : 264063,
      gastoCompra      : 171993,
      gastoPersonal    : 32593,
      gastoExplotacion : 13619,
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
var url = 'mongodb://mebsc:mebsc@ds045521.mongolab.com:045521/mebsc-pimpam';

//var url = 'mongodb://mebsc:mebsc@ds045622.mongolab.com:45622/mebsc-hsn';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server");
  cargarDatos(db, function() {
    db.close();
  });
});