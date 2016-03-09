var datosData = require('./data/datosData.js');
var datosmData = require('./data/datosmData.js');
var configData = require('./data/configData.js');
var userData = require('./data/userData.js');
var kpiData = require('./data/kpiData.js');
var kpidatosData = require('./data/kpidatosData.js');
var kpidatosmData = require('./data/kpidatosmData.js');



var moment = require('moment');
//var config = require('./config');
var bcrypt = require('bcryptjs');

//var jwt = require('jwt-simple');

// cambio conexiones
exports.init = function (mongo) {
    kpiData.init(mongo);
    datosData.init(mongo);
    datosmData.init(mongo);
};

module.exports.route = function (app) {

/*
 |--------------------------------------------------------------------------
 | Middleware de validación de sesiones
 |-----------------------------------------------------
 */

// ============>>>> Disable for testing <<<<<<================
/*
// Esta función se ejecuta para todas las rutas que empiecen por '/api'
app.use('/api/', function (req, res, next) {

	userData.ensureAuthenticated(req, res);
	next();

});
*/


/*
 |--------------------------------------------------------------------------
 | Log in with Email
 |--------------------------------------------------------------------------
 */
	app.post('/auth/login', function(req, res) {
	  userData.findingByEmail(req.body.email)
	      .then(function (data) {
	          if (data.length == 0){
	            return res.status(401).send({ message: 'Wrong email and/or password' });
	          }

	          bcrypt.compare(req.body.password, data[0].password, function(err, isMatch) {
	            if (!isMatch) {
	              return res.status(401).send({ message: 'Wrong email and/or password' });
	            }
	            res.send({ token: userData.createToken(data) });
	          });
	       })
	      .fail(function (err) {
	        res.status(500).send(err);
	      });

	});

/*
 |--------------------------------------------------------------------------
 | Create Email and Password Account
 |--------------------------------------------------------------------------
 */

	app.post('/auth/signup', function(req, res) {
	    userData.findingByEmail(req.body.email)
	      .then(function (data) {
	          if (data.length == 1){
	            return res.status(409).send({ message: 'Email is already taken' });
	          }       		  
	          bcrypt.genSalt(10, function(err, salt) {
	            bcrypt.hash(req.body.password, salt, function(err, hash) {    			  
	              req.body.password = hash;
	              userData.inserting(req.body)
	                .then(function (data) {
	                  res.send({ token: userData.createToken(data) });
	                  })
	                .fail(function (err) {
	                  res.status(500).send(err);
	                  });
	              });
	            });
	       })
	      .fail(function (err) {
	        res.status(500).send(err);
	      });

	});


	app.route('/')
		.get(function (req, res, next) {
		respuesta.send('Hola Express!');
		})



/*
// routes for /blogs
app.get('/blogs',					   blogController.index);
app.get('/blogs/:blogId(\\d+)',		   blogController.show);
app.get('/blogs/:blogId(\\d+)/answer', blogController.answer);
app.get('/blogs/new',				   sessionController.loginRequired, blogController.new);
app.post('/blogs/create',			   sessionController.loginRequired, blogController.create);
app.get('/blogs/:blogId(\\d+)/edit',   sessionController.loginRequired, blogController.edit);
app.put('/blogs/:blogId(\\d+)',		   sessionController.loginRequired, blogController.update);
app.delete('/blogs/:blogId(\\d+)',	   sessionController.loginRequired, blogController.destroy);
*/




/* |====================================================================
   |
   | DATOS: Cuenta de explotacion
   |
   |====================================================================
*/



/*
 |--------------------------------------------------------------------------
 | Read Datos
 |--------------------------------------------------------------------------
 */

app.route('/api/datos/:fecha/edit')
		.get(function (req, res, next) {
			var year = parseInt(req.params.fecha.substring(0,4));
			var month = parseInt(req.params.fecha.substring(4,6));
			month = (month < 10) ? ("0" + month) : month; // per si viene el mes en un solo digito.

			var v_fecha = year + "-" + month + "-01T10:00:00+00:00"
			newFecha = moment(v_fecha).toDate()

			datosData.findingDatosByFecha(newFecha)
				.then(function (data) { 
					if (data.length == 0){
						res.json({result : "1"});
						
					}else {	
						res.json({result : "0" , data : data});
					}

				})
				.fail(function (err) {	// Como no existe se permite crear dato
					res.status(500).send(err);
				});

		})


/*
 |--------------------------------------------------------------------------
 | Delete Datos
 |--------------------------------------------------------------------------
 */

app.route('/api/datos/:fecha/delete')
		.get(function (req, res, next) {
			var year = parseInt(req.params.fecha.substring(0,4));
			var month = parseInt(req.params.fecha.substring(4,6));
			month = (month < 10) ? ("0" + month) : month; // per si viene el mes en un solo digito.

			var v_fecha = year + "-" + month + "-01T10:00:00+00:00"
			newFecha = moment(v_fecha).toDate()

			datosData.deletingDatosByFecha(newFecha)
				.then(function (data) { 
					if (data.length == 0){
						res.json({result : "1"});
						
					}else {	
						res.json({result : "0" , data : data});
					}

				})
				.fail(function (err) {	// Como no existe se permite crear dato
					res.status(500).send(err);
				});

		})



/*
 |--------------------------------------------------------------------------
 | Datos by default : date of  config
 |--------------------------------------------------------------------------
 */
	app.route('/api/datos/update')
		.post(function (req, res, next) {
			var dato = req.body;
			dato.mes = (dato.mes < 10) ? ("0" + dato.mes) : dato.mes; // per si viene el mes en un solo digito.

			var v_fecha = dato.any + "-" + dato.mes + "-01T10:00:00+00:00"
			newFecha = moment(v_fecha).toDate()
			dato.fecha = newFecha

			datosData.findingDatosByFecha(dato.fecha)
				.then(function (data) { 
					if (data.length == 1){   // Verificar que existe el registro
						datosData.updatingById(data[0]._id, dato)
							.then(function (data) {
								res.json({result : "0"});
							})
							.fail(function (err) {
								res.status(500).send(err);
							});
					}else {	// no existe el registro con fecha y no se puede modificar
						res.json({result : "1"});
					}

				})
				.fail(function (err) {	// Como no existe no permite crear dato
					res.status(501).send(err);
				});




		})


/*
 |--------------------------------------------------------------------------
 | Datos by default : date of  config
 |--------------------------------------------------------------------------
 */
	app.route('/api/datos')
		.get(function (req, res, next) {
			configData.findingConfig()
				.then(function (data) {
					datosData.generateDatos(data[0].fecha)
						.then(function (data) {
							res.json(data);
						})
						.fail(function (err) {
							res.status(500).send(err);
						});
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
		})


		.post(function (req, res, next) {
			var dato = req.body;

			dato.mes = (dato.mes < 10) ? ("0" + dato.mes) : dato.mes; // per si viene el mes en un solo digito.

			var v_fecha = dato.any + "-" + dato.mes + "-01T10:00:00+00:00"
			newFecha = moment(v_fecha).toDate()

			dato.fecha = newFecha
			datosData.findingDatosByFecha(dato.fecha)
				.then(function (data) { 
					if (data.length == 0){
						datosData.insertingDatos(dato)
							.then(function (data) {
								res.json({result : "0"});
							})
							.fail(function (err) {
								res.status(500).send(err);
							});
					}else {	// ya existe el registro con fecha y no se crea el dato
						res.json({result : "1"});
					}

				})
				.fail(function (err) {	// Como no existe se permite crear dato
					res.status(500).send(err);
				});

		})

		

	app.route('/api/datoslist')
		.get(function (req, res, next) {
			datosData.findingDatos()
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.status(500).send(err);
				});

		})


/*
 |--------------------------------------------------------------------------
 | Datos by month
 |--------------------------------------------------------------------------
 */
	app.route('/api/datos/:fecha')
		.get(function (req, res, next) {
			var year = parseInt(req.params.fecha.substring(0,4));
			var month = parseInt(req.params.fecha.substring(4,6)) - 1;
			var fecha = moment([year, month, 1, 10]).toDate()
			datosData.generateDatos(fecha)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
		})

/* |>>>>>>>>>>>>>>>>========================================<<<<<<<<<<<<
   |
   | DATOSM: Cuenta de explotacion mochila
   |
   |>>>>>>>>>>>>>>>>========================================<<<<<<<<<<<<
*/



/*
 |--------------------------------------------------------------------------
 | Read Datosm
 |--------------------------------------------------------------------------
 */

app.route('/api/datosm/:fecha/edit')
		.get(function (req, res, next) {
			var year = parseInt(req.params.fecha.substring(0,4));
			var month = parseInt(req.params.fecha.substring(4,6));
			month = (month < 10) ? ("0" + month) : month; // per si viene el mes en un solo digito.

			var v_fecha = year + "-" + month + "-01T10:00:00+00:00"
			newFecha = moment(v_fecha).toDate()

			datosmData.findingDatosByFecha(newFecha)
				.then(function (data) { 
					if (data.length == 0){
						res.json({result : "1"});
						
					}else {	
						res.json({result : "0" , data : data});
					}

				})
				.fail(function (err) {	// Como no existe se permite crear dato
					res.status(500).send(err);
				});

		})


/*
 |--------------------------------------------------------------------------
 | Delete Datosm
 |--------------------------------------------------------------------------
 */

app.route('/api/datosm/:fecha/delete')
		.get(function (req, res, next) {
			var year = parseInt(req.params.fecha.substring(0,4));
			var month = parseInt(req.params.fecha.substring(4,6));
			month = (month < 10) ? ("0" + month) : month; // per si viene el mes en un solo digito.

			var v_fecha = year + "-" + month + "-01T10:00:00+00:00"
			newFecha = moment(v_fecha).toDate()

			datosmData.deletingDatosByFecha(newFecha)
				.then(function (data) { 
					if (data.length == 0){
						res.json({result : "1"});
						
					}else {	
						res.json({result : "0" , data : data});
					}

				})
				.fail(function (err) {	// Como no existe se permite crear dato
					res.status(500).send(err);
				});

		})



/*
 |--------------------------------------------------------------------------
 | Datosm by default : date of  config
 |--------------------------------------------------------------------------
 */
	app.route('/api/datosm/update')
		.post(function (req, res, next) {
			var dato = req.body;
			dato.mes = (dato.mes < 10) ? ("0" + dato.mes) : dato.mes; // per si viene el mes en un solo digito.

			var v_fecha = dato.any + "-" + dato.mes + "-01T10:00:00+00:00"
			newFecha = moment(v_fecha).toDate()
			dato.fecha = newFecha

			datosmData.findingDatosByFecha(dato.fecha)
				.then(function (data) { 
					if (data.length == 1){   // Verificar que existe el registro
						datosmData.updatingById(data[0]._id, dato)
							.then(function (data) {
								res.json({result : "0"});
							})
							.fail(function (err) {
								res.status(500).send(err);
							});
					}else {	// no existe el registro con fecha y no se puede modificar
						res.json({result : "1"});
					}

				})
				.fail(function (err) {	// Como no existe no permite crear dato
					res.status(501).send(err);
				});




		})


/*
 |--------------------------------------------------------------------------
 | Datosm by default : date of  config
 |--------------------------------------------------------------------------
 */
	app.route('/api/datosm')
		.get(function (req, res, next) {
			configData.findingConfig()
				.then(function (data) {
					datosmData.generateDatos(data[0].fecha)
						.then(function (data) {
							res.json(data);
						})
						.fail(function (err) {
							res.status(500).send(err);
						});
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
		})


		.post(function (req, res, next) {
			var dato = req.body;

			dato.mes = (dato.mes < 10) ? ("0" + dato.mes) : dato.mes; // per si viene el mes en un solo digito.

			var v_fecha = dato.any + "-" + dato.mes + "-01T10:00:00+00:00"
			newFecha = moment(v_fecha).toDate()

			dato.fecha = newFecha
			datosmData.findingDatosByFecha(dato.fecha)
				.then(function (data) { 
					dato.ingresoVenta = parseInt(dato.ingresoVenta)
					if (data.length == 0){
						datosmData.insertingDatos(dato)
							.then(function (data) {
								res.json({result : "0"});
							})
							.fail(function (err) {
								res.status(500).send(err);
							});
					}else {	// ya existe el registro con fecha y no se crea el dato
						res.json({result : "1"});
					}

				})
				.fail(function (err) {	// Como no existe se permite crear dato
					res.status(500).send(err);
				});

		})

		

	app.route('/api/datosmlist')
		.get(function (req, res, next) {
			datosmData.findingDatos()
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.status(500).send(err);
				});

		})


/*
 |--------------------------------------------------------------------------
 | Datos by month
 |--------------------------------------------------------------------------
 */
	app.route('/api/datosm/:fecha')
		.get(function (req, res, next) {
			var year = parseInt(req.params.fecha.substring(0,4));
			var month = parseInt(req.params.fecha.substring(4,6)) - 1;
			var fecha = moment([year, month, 1, 10]).toDate()
			datosmData.generateDatos(fecha)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
		})

/* |=================================================================================
   |
   | KPI's: Relación de KPI's (en principio relacionados con cuenta de Explotación)
   |
   |=================================================================================
*/

	app.route('/api/kpi/:id_kpi')
		.post(function (req, res, next) {
			var dato = req.body;
			kpiData.savingKpi(dato)
				.then(function (data) {	
					res.json(data);
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
		})


/* |========================================
   |
   | KPI's - DATOS : Relación de KPI's DATOS
   |   
   |========================================
*/

/*
 |--------------------------------------------------------------------------
 | KPI's - DATOS by default : date of  config
 |--------------------------------------------------------------------------
 */
	app.route('/api/kpi/datos')
		.get(function (req, res, next) {
			kpiData.findingKpi()
				.then(function (data) {
					kpidatosData.obtenerKpi(data)
						.then(function (data) {
							res.json(data);
							})
						.fail(function (err) {
							res.status(500).send(err);
						});
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
		})


		.post(function (req, res, next) {
			var dato = req.body;
			kpiData.savingKpi(dato)
				.then(function (data) {	
					res.json(data);
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
		})

/*
 |--------------------------------------------------------------------------
 | KPI's - DATOS - by month
 |--------------------------------------------------------------------------
 */
	app.route('/api/kpi/datos/:fecha')
		.get(function (req, res, next) {
			kpiData.findingKpi()
				.then(function (data) {
					kpidatosData.obtenerKpi(data, req.params.fecha)
						.then(function (data) {
							res.json(data);
							})
						.fail(function (err) {
							res.status(500).send(err);
						});
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
		})


/* |========================================
   |
   | KPI's - DATOSM : Relación de KPI's DATOSM
   |   
   |========================================
*/

/*
 |--------------------------------------------------------------------------
 | KPI's - DATOSM by default : date of  config
 |--------------------------------------------------------------------------
 */
	app.route('/api/kpi/datosm')
		.get(function (req, res, next) {
			kpiData.findingKpi()
				.then(function (data) {
					kpidatosmData.obtenerKpi(data)
						.then(function (data) {
							res.json(data);
							})
						.fail(function (err) {
							res.status(500).send(err);
						});
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
		})


		.post(function (req, res, next) {
			var dato = req.body;
			kpiData.savingKpi(dato)
				.then(function (data) {	
					res.json(data);
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
		})

/*
 |--------------------------------------------------------------------------
 | KPI's - DATOSM - by month
 |--------------------------------------------------------------------------
 */
	app.route('/api/kpi/datosm/:fecha')
		.get(function (req, res, next) {
			kpiData.findingKpi()
				.then(function (data) {
					kpidatosmData.obtenerKpi(data, req.params.fecha)
						.then(function (data) {
							res.json(data);
							})
						.fail(function (err) {
							res.status(500).send(err);
						});
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
		})



/* |==================================================================================
   |
   | CONFIG: configuracion de la plataforma, de momento únicamente Fecha ultimo cierre
   |
   |===================================================================================
*/

/*
 |--------------------------------------------------------------------------
 | Config
 |--------------------------------------------------------------------------
 */
	app.route('/api/config')
		.get(function (req, res, next) {
			configData.findingConfig()
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
		})

		.post(function (req, res, next) {
			var dato = req.body;
			configData.savingConfig(dato)
				.then(function (data) {	
					res.json(data);
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
		})

/*
 |--------------------------------------------------------------------------
 | Labels by default
 |--------------------------------------------------------------------------
 */

	app.route('/api/labels')
		.get(function (req, res, next) {
			configData.horizonLabels()
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
	
		})

/*
 |--------------------------------------------------------------------------
 | Labels by fecha
 |--------------------------------------------------------------------------
 */
app.route('/api/labels/:fecha')
		.get(function (req, res, next) {
			configData.horizonLabels(req.params.fecha)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.status(500).send(err);
				});
	
		})


}