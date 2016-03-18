// Ojo!!! var models = require('../models/models.js');
import blogsData from '../data/blogsData.js';
import countersData from '../data/countersData.js';



// Autoload - factoriza el código si ruta incluye :quizId
exports.load = function (req, res, next, blogId) {
	console.log(blogId);
	blogsData.findingById(blogId)
 	.then(function(blog){
	 		if (blog.length){
	 			req.blog = blog[0];
	 			next();
	 		} else {
	 			return res.status(401).send({ message: 'Wrong blog id' }); 
	 		}
	 	}
	).fail(function(error) {next(error);});
	
};

// GET /blogs
exports.index = function (req, res) {
	blogsData.findingAll()
		.then(function (data) {
			res.json(data);
		})
		.fail(function (err) {
			res.status(500).send(err);
		});



/*

	console.log("query:", req.query.search);
	if (req.query.search){
		req.query.search = req.query.search.replace(/ /g,"%");
		console.log("query2:", req.query.search);
		models.Quiz.findAll({where: ["pregunta like ?", "%"+req.query.search+"%"], order:['pregunta']}).then(function(quizes){
 			res.render('quizes/index', {quizes : quizes, errors : []});
 		})
	} else{
 		models.Quiz.findAll().then(function(quizes){
 			res.render('quizes/index', {quizes : quizes, errors : []});
 		})
 	}
*/	
};

// GET /quizzes/new
exports.new = function (req, res) {
 	var quiz = models.Quiz.build({pregunta: "Pregunta", respuesta: "Respuesta", tema : "Tema"});

 	res.render('quizes/new', {quiz : quiz, errors : []});
};

// GET /quizzes/create
exports.create = function (req, res) {
 	let seq;
 	let blog = req.body;
 	countersData.getNextSequence('blogs')
 	.then(function (data){
	 	blog._id = data.value.seq;
		blogsData.insertingDatos(blog)
			.then(function (data) {
				res.json({result : "0"});
			})
			.fail(function (err) {
				res.status(500).send(err);
			});
	});
};

// GET /quizzes/:id/edit
exports.edit = function (req, res) {
 	var quiz = req.quiz; // autoload de instancia de quiz

 	res.render('quizes/edit', {quiz : quiz, errors : []});
};

// PUT /quizzes/:id
exports.update = function (req, res) {
	console.log("Blog Update:", req.blog)
	if (req.blog){
		blogsData.updatingById(req.blog._id, req.body)
		.then(function (data) {
			res.json({result : "0"});
		})
		.fail(function (err) {
			res.status(500).send(err);
		});
	} else {
		return res.status(401).send({ message: 'Wrong blog id' });
	};
	
};

// DELETE /quizzes/:id
exports.destroy = function (req, res) {
	console.log("Blog Destroy:", req.blog)
	if (req.blog){
		blogsData.deletingById(req.blog._id)
		.then(function (data) {
			res.json({result : "0"});
		})
		.fail(function (err) {
			res.status(500).send(err);
		});
	} else {
		return res.status(401).send({ message: 'Wrong blog id' });
	};
	
};





// GET /quizzes/question
exports.show = function (req, res) {
	console.log("Blog:", req.blog)
	if (req.blog){
			res.json(req.blog);
	} else {
			res.status(500).send(err);
		};
};

// GET /quizzes/answer
exports.answer = function (req, res) {
	var resultado = 'Incorrecto';
 	if (req.query.respuesta === req.quiz.respuesta){
		resultado = 'Correcto';
	}
	res.render('quizes/answer', { quiz : req.quiz ,respuesta: resultado, errors : []});
};
