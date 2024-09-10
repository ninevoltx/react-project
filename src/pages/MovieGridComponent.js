import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const posters = [];
for (let i = 1; i <= 13; i++) {
  posters[i] = require(`./movies/${i}.jpg`).default;
}

const MovieGridComponent = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Fetch data from Express API for all movies
    fetch('http://localhost:3001/api/movies') // Use the correct URL
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movie data:', error));
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.moviename.toLowerCase().startsWith(searchText.toLowerCase())
  );
  
  const posterSrc = `poster${movies.movieID}`

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movie posters..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <div className="movie-grid">
        {filteredMovies.map((movie, index) => (
          <Link key={index} to={`/movie/${movie.movieID}`} className="movie-link">
            <div className="movie-container">
              <img src={posterSrc} alt={`Movie Poster ${index + 1}`} className="movie-poster" />
              <p className="movie-title">{movie.moviename}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieGridComponent;