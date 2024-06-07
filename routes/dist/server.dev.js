"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var cors = require('cors');

var movieRoutes = require('./routes/movieRoutes');

var app = express();
var port = 8000;
app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/MoviesDB', {}).then(function () {
  console.log('Connected to MongoDB');
})["catch"](function (error) {
  console.error('Error connecting to MongoDB:', error);
});
app.use('/api/movies', movieRoutes);
app.listen(port, function () {
  console.log("Server is running on http://localhost:".concat(port));
});
//# sourceMappingURL=server.dev.js.map
