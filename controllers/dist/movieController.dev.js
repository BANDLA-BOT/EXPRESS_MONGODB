"use strict";

var Movie = require('../models/Movie');

exports.createMovie = function _callee(req, res) {
  var _req$body, title, director, year, newMovie;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, title = _req$body.title, director = _req$body.director, year = _req$body.year;
          newMovie = new Movie({
            title: title,
            director: director,
            year: year
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(newMovie.save());

        case 5:
          res.status(201).json(newMovie);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: 'Error creating Movie',
            error: _context.t0
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getAllMovies = function _callee2(req, res) {
  var movies;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Movie.find());

        case 3:
          movies = _context2.sent;
          res.json(movies);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: 'Error fetching Movies',
            error: _context2.t0
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getMovieById = function _callee3(req, res) {
  var id, movie;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Movie.findById(id));

        case 4:
          movie = _context3.sent;

          if (movie) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: 'Movie not found'
          }));

        case 7:
          res.json(movie);
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          res.status(500).json({
            message: 'Error fetching Movie',
            error: _context3.t0
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.updateMovieById = function _callee4(req, res) {
  var id, updatedMovie;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Movie.findByIdAndUpdate(id, req.body, {
            "new": true
          }));

        case 4:
          updatedMovie = _context4.sent;

          if (updatedMovie) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: 'Movie not found'
          }));

        case 7:
          res.json(updatedMovie);
          _context4.next = 13;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          res.status(500).json({
            message: 'Error updating Movie',
            error: _context4.t0
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.deleteMovieById = function _callee5(req, res) {
  var id, deletedMovie;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Movie.findByIdAndDelete(id));

        case 4:
          deletedMovie = _context5.sent;

          if (deletedMovie) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            message: 'Movie not found'
          }));

        case 7:
          res.json({
            message: 'Movie deleted successfully'
          });
          _context5.next = 13;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json({
            message: 'Error deleting movie',
            error: _context5.t0
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 10]]);
};
//# sourceMappingURL=movieController.dev.js.map
