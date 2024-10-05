import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, error }) => {
  return (
    <div>
      {movies.length > 0 ? (
        movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <p>No movies found. Please try a different search.</p>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default MovieList;
