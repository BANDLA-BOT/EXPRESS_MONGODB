"use strict";

var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  year: Number
});
module.exports = mongoose.model('movie', movieSchema);
//# sourceMappingURL=Movie.dev.js.map
