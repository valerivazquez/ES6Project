
import express from 'express';
import router from './server/routes.js';
import bodyParser from 'body-parser';
import mongod from './server/data/mongodb.js'; // MongoDB Connects

// Configuration express Application
var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));


// Interceptor of calls
app.use(function (req, res, next) {
	console.log("request received: " + req.url);
	// Es muy importante continuar el flujo hacia la sigueinte función
	next();
	// En caso de no hacerlo, se colgaría la llamada
	});


// Add Routes 	
router.route(app);

// Open MongoDB connects
router.init(mongod)

// Open port Server for App
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log('Listening for port:', app.get('port') );








