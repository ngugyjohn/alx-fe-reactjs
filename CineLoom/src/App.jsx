import { useState } from 'react';
import axios from 'axios';
import './App.css';
import React from "react";

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSelectedMovie(null);

    try {
      const res = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=f7125a73`);
      if (res.data.Response === "True") {
        setMovies(res.data.Search);
      } else {
        setError(res.data.Error);
      }
    } catch (err) {
      setError('Failed to fetch movie data');
    } finally {
      setLoading(false);
    }
  };

  const fetchMovieDetails = async (movieID) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://www.omdbapi.com/?i=${movieID}&apikey=f7125a73`);
      if (res.data.Response === "True") {
        setSelectedMovie(res.data);
      }
    } catch (err) {
      setError('Failed to fetch movie details');
    } finally {
      setLoading(false);
    }
  };

  return (
    
    
    
    <div className="App">
      <h1>Movie Database</h1>
      
      <form onSubmit={searchMovies}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies"
          className="search-bar"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!selectedMovie ? (
        <div className="movie-list">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card" onClick={() => fetchMovieDetails(movie.imdbID)}>
              <img src={movie.Poster} alt={movie.Title} />
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="movie-details">
          <h2>{selectedMovie.Title}</h2>
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
          <p>{selectedMovie.Plot}</p>
          <p><strong>Cast:</strong> {selectedMovie.Actors}</p>
          <p><strong>Rating:</strong> {selectedMovie.imdbRating}</p>
          <button onClick={() => setSelectedMovie(null)}>Back to results</button>
        </div>
      )}
    </div>
  );
}

export default App;
