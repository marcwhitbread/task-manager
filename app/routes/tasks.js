var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Task = require('../models/Task.js');

/* GET /tasks listing. */
router.get('/', function(req, res, next) {
	
	Task.find(function (e, tasks) {
		if(e) return next(e);
		res.json(tasks);
	});
	
});

/* GET /tasks/id */
router.get('/:id', function(req, res, next) {
	
	Task.findById(req.params.id, function (e, post) {
		if(e) return next(e);
		res.json(post);
	});
	
});

/* POST /tasks */
router.post('/', function(req, res, next) {
	
	Task.create(req.body, function (e, post) {
		if(e) return next(e);
		res.json(post);
	});
	
});

/* PUT /tasks/:id */
router.put('/:id', function(req, res, next) {

	Task.findByIdAndUpdate(req.params.id, req.body, function (e, post) {
		if(e) return next(e);
		res.json(post);
	});

});

/* DELETE /tasks/:id */
router.delete('/:id', function(req, res, next) {
	
	Task.findByIdAndRemove(req.params.id, req.body, function(e, post) {
		if(e) return next(e);
		res.json(post);
	});
  
});

module.exports = router;