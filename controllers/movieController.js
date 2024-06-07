const Movie = require('../models/Movie');

exports.createMovie = async (req, res) => {
  try {
    const { title, director, year } = req.body;
    const newMovie = new Movie({ title, director, year });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: 'Error creating Movie', error });
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Movies', error });
  }
};

exports.getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Movie', error });
  }
};

exports.updateMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: 'Error updating Movie', error });
  }
};

exports.deleteMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMovie= await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting movie', error });
  }
};
