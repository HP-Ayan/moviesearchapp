import React, { useState } from 'react';
import axios from 'axios';
import MovieDetails from './MovieDetails'; 
import './MovieSearch.css';

const MovieSearch = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const apiKey = 'b475ff86';

  const fetchMovies = (title) => {
    axios
      .get(`https://www.omdbapi.com/?s=${encodeURIComponent(title)}&apikey=${apiKey}`)
      .then(response => {
        const data = response.data;
        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      })
      .catch(error => console.error('Error:', error));
  };

  const handleSearch = () => {
    if (movieTitle) {
      fetchMovies(movieTitle);
    }
  };

  const handleBack = () => {
    setSelectedMovie(null); 
  };

  const fetchMovieDetails = (imdbID) => {
    axios
      .get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`)
      .then(response => {
        const data = response.data;
        if (data.Response === 'True') {
          setSelectedMovie(data);
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
      {!selectedMovie ? (
        <>
          <h1>OMDb API Movie Search</h1>
          <input
            type="text"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
            placeholder="Enter movie title"
          />
          <button onClick={handleSearch}>Search</button>
          <div className="result">
            {movies.map(movie => (
              <div className="movie-item" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                <h3>{movie.Title} ({movie.Year})</h3>
                <button onClick={() => fetchMovieDetails(movie.imdbID)}>View Details</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <MovieDetails movie={selectedMovie} onBack={handleBack} />
      )}
    </div>
  );
};

export default MovieSearch;
