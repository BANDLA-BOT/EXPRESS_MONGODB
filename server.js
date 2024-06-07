const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/MoviesDB', {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use('/api/movies', movieRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
