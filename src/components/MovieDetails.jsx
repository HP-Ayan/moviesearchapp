import React from 'react';
import './MovieSearch.css';

const MovieDetails = ({ movie, onBack }) => {
  if (!movie) {
    return <div className="container"><p>Loading movie details...</p></div>;
  }

  return (
    <div className="container">
      <h1 id="movieTitle">{`${movie.Title} (${movie.Year})`}</h1>
      <div id="movieDetails">
        <img src={movie.Poster} alt={`${movie.Title} Poster`} className="movie-poster" />
        <table className="movie-details">
          <tbody>
            <tr>
              <td><strong>Genre:</strong></td>
              <td>{movie.Genre}</td>
            </tr>
            <tr>
              <td><strong>Director:</strong></td>
              <td>{movie.Director}</td>
            </tr>
            <tr>
              <td><strong>Writer:</strong></td>
              <td>{movie.Writer}</td>
            </tr>
            <tr>
              <td><strong>Actors:</strong></td>
              <td>{movie.Actors}</td>
            </tr>
            <tr>
              <td><strong>Plot:</strong></td>
              <td>{movie.Plot}</td>
            </tr>
            <tr>
              <td><strong>Language:</strong></td>
              <td>{movie.Language}</td>
            </tr>
            <tr>
              <td><strong>Country:</strong></td>
              <td>{movie.Country}</td>
            </tr>
            <tr>
              <td><strong>Awards:</strong></td>
              <td>{movie.Awards}</td>
            </tr>
            <tr>
              <td><strong>IMDB Rating:</strong></td>
              <td>{`${movie.imdbRating}/10 (${movie.imdbVotes} votes)`}</td>
            </tr>
            <tr>
              <td><strong>Metascore:</strong></td>
              <td>{`${movie.Metascore}/100`}</td>
            </tr>
            <tr>
              <td><strong>Box Office:</strong></td>
              <td>{movie.BoxOffice}</td>
            </tr>
            <tr>
              <td><strong>Ratings:</strong></td>
              <td>
                <ul>
                  {movie.Ratings.map((rating, index) => (
                    <li key={index}>{`${rating.Source}: ${rating.Value}`}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="backBtn">
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
};

export default MovieDetails;
