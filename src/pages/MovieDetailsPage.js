import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const posters = [];
for (let i = 1; i <= 13; i++) {
  posters[i] = require(`./movies/${i}.jpg`).default;
}

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    // Fetch data from Express API for the specific movie based on id
    fetch(`http://localhost:3001/api/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovieDetails(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]);

  return (
    <div>
      <div style={{ width: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>{movieDetails.moviename}</h1>
          <img src={`file:///C:/Users/User/Desktop/projects/finishproject/public/movies/${movieDetails.movieposter}`} alt={movieDetails.moviename} style={{ width: '100%', maxWidth: '300px' }} />
        </div>
        <div>
          <p>
            <strong>Year:</strong> {movieDetails.movieyear}
          </p>
          <p>
            <strong>Genre:</strong> {movieDetails.moviegenre}
          </p>
          <p>
            <strong>Director:</strong> {movieDetails.moviedirector}
          </p>
          <p>
            <strong>See the current showings:</strong> <a href="./">Link</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;