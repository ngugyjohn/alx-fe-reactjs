import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from './movieServices';

const MovieDetails = ({ movieID }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetchMovieDetails(movieID);
        setMovieDetails(res.data);
      } catch (error) {
        setError("Unable to fetch movie details");
      }
    };
    fetchDetails();
  }, [movieID]);

  return (
    <div>
      {movieDetails ? (
        <div>
          <h2>{movieDetails.Title}</h2>
          <p>{movieDetails.Year}</p>
          <p>{movieDetails.Plot}</p>
          <p>Actors: {movieDetails.Actors}</p>
          <p>IMDB Rating: {movieDetails.imdbRating}</p>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default MovieDetails;
