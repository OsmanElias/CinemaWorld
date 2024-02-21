/**
 * movieController.js
 * 
 * CinemaWorld February 4th, 2024
 * 
 * Osman Elias
 * 
 */


const { fetchMovies } = require('../routes/tmdbService');

const getPopularMovies = async (req, res) => {
  try {
    const movies = await fetchMovies();
    res.json(movies);
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    res.status(500).send('Server error');
  }
};

module.exports = { getPopularMovies };