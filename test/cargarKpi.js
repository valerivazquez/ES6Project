var moment = require('moment');
var cargarConfig = function(db, callback) {
  
  var collection = db.collection('kpi');
  var date_closed = moment([2015, 2, 1, 12]);

  collection.drop();

  collection.insert([
    {
      _id         : 1,
      title       : 'Punto de equilibrio',
      unit        : '€',
      frecuency   : 'Acum. Anual',
      category    : 'Finanzas',
      perspective : 'Finanzas',
      reference   : 'Calculo de punto de equilibrio',
      alert_w      : '0',
      alert_f      : '-5',
      alert_comp  : '<',
      iniciatives : '',
      responsible : 'Administración / Finanzas',
      result      : 0

    },
    {
      _id         : 2,
      title       : 'Beneficio sobre ventas',
      unit        : '%',
      frecuency   : 'Acum. Anual',
      category    : 'Finanzas',
      perspective : 'Finanzas',
      reference   : '10',
      alert_w      : '8',
      alert_f      : '5',
      alert_comp  : '<',
      iniciatives : '',
      responsible : 'Administración / Finanzas',
      result      : 0

    },
    {
      _id         : 3,
      title       : 'Compras sobre ventas',
      unit        : '%',
      frecuency   : 'Acum. Anual',
      category    : 'Finanzas',
      perspective : 'Finanzas',
      reference   : '25',
      alert_w      : '28',
      alert_f      : '30',
      alert_comp  : '>',
      iniciatives : '',
      responsible : 'Administración / Finanzas',
      result      : 0


    },
    {
      _id         : 4,
      title       : 'Personal sobre ventas',
      unit        : '%',
      frecuency   : 'Acum. Anual',
      category    : 'Finanzas',
      perspective : 'Finanzas',
      reference   : '60',
      alert_w      : '62',
      alert_f      : '65',
      alert_comp  : '>',
      iniciatives : '',
      responsible : 'Administración / Finanzas',
      result      : 0


    },
    {
      _id         : 5,
      title       : 'Explotación sobre ventas',
      unit        : '%',
      frecuency   : 'Acum. Anual',
      category    : 'Finanzas',
      perspective : 'Finanzas',
      reference   : '20',
      alert_w      : '22',
      alert_f      : '24',
      alert_comp  : '>',
      iniciatives : '',
      responsible : 'Administración / Finanzas',
      result      : 0


    },
    {   
      _id         : 6,
      title       : 'Impagos',
      unit        : '€',
      frecuency   : 'Mensual',
      category    : 'Finanzas',
      perspective : 'Finanzas',
      reference   : 'Mes anterior',
      alert_w      : '0',
      alert_f      : '10',
      alert_comp  : '>',
      iniciatives : '',
      responsible : 'Administración / Finanzas',
      result      : 0


    },
    {   
      _id         : 7,
      title       : 'Evolución Ventas',
      unit        : '€',
      frecuency   : 'Mensual',
      category    : 'Finanzas',
      perspective : 'Finanzas',
      reference   : 'Mes anterior',
      alert_w      : '10',
      alert_f      : '5',
      alert_comp  : '<',
      iniciatives : '',
      responsible : 'Administración / Finanzas',
      result      : 0


    },
    

  ], function(err, result) {
    console.log("CargaKpi was succesfully");
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
  cargarConfig(db, function() {
    db.close();
  });
});