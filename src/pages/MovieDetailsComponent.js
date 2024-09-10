import React, { useState, useEffect } from 'react';

const MovieDetailsComponent = () => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    // Fetch data from Express API for movie with movieID 4
    fetch('http://localhost:3001/api/movies/4') // Use the correct URL
      .then(response => response.json())
      .then(data => setMovieData(data))
      .catch(error => console.error('Error fetching movie data:', error));
  }, []);

  return (
    <div style={{ padding: '5px', overflow: 'hidden' }}>
      <p>Moviename: {movieData.moviename}</p>
      <p>Movieyear: {movieData.movieyear}</p>
      <p>Moviegenre: {movieData.moviegenre}</p>
      <p>Moviedirector: {movieData.moviedirector}</p>
      {movieData.movieposter && <img src={movieData.movieposter} alt="Movie Poster" />}
    </div>
  );
};

export default MovieDetailsComponent;