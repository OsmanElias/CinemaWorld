const axios = require('axios');
require('dotenv').config(); // Ensure your environment variables are loaded
const TMDB_API_KEY = process.env.TMDB_API_KEY;

const fetchMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data from TMDB:', error);
    return [];
  }
};

module.exports = { fetchMovies };