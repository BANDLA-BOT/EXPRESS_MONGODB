"use strict";

var express = require('express');

var router = express.Router();

var movieController = require('../controllers/movieController');

router.post('/', movieController.createMovie);
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.put('/:id', movieController.updateMovieById);
router["delete"]('/:id', movieController.deleteMovieById);
module.exports = router;
//# sourceMappingURL=movieRoutes.dev.js.map
