const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  year: Number,
});

module.exports = mongoose.model('movie', movieSchema);
