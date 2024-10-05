import axios from 'axios';

const API_KEY = 'f7125a73';  // OMDB API Key
const BASE_URL = 'https://www.omdbapi.com/';

// Function to search for movies
export const searchMovies = (query, page = 1) => {
  if (!query) {
    return Promise.reject(new Error("Search query cannot be empty"));
  }
  return axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}&page=${page}`);
};

// Function to fetch movie details by ID
export const fetchMovieDetails = (movieID) => {
  return axios.get(`${BASE_URL}?i=${movieID}&apikey=${API_KEY}`);
};
