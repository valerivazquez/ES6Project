var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('datos');
  // Insert some documents
  
  fecha = new Date();


  collection.insert([
    {
    	fecha		  : fecha,
    	ingresoVentas     : 111,
    	gastoPersonal     : 1111,
    	gastoCompras      : 11,
      gastoSuministro   : 111,
    	gastoFijos        : 1,
      gastoAmort        : 11
    }
  ])

}


var MongoClient = require('mongodb').MongoClient;
 

// Connection URL
var url = 'mongodb://localhost:27017/mebsc';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server OK!!!");
  insertDocuments(db, function() {
    db.close();
  });
});