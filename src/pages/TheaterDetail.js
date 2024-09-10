import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TheaterDetail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const theaterDetails = {
    1: { name: 'Circle', address: 'Oak Street No 23', phone: '98402348', src: 'circle.jpg'},
    2: { name: 'Grove', address: 'Wilkinson Crossing No 45/A', phone: '8834759375', src: 'grove.jpg' },
    3: { name: 'Living Room', address: 'Mandelay Ave No 11', phone: '8503948', src: 'living.jpg' },
    4: { name: 'Patriot', address: 'Ten Cedars Street No 22', phone: '8309430958', src: 'patriot.jpg' },
  };

  useEffect(() => {
    fetch('http://localhost:3001/api/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movie data:', error));
  }, []);
  const filteredMovies = movies.filter(movie =>
    movie.movieshowings.toLowerCase().includes(theaterDetails[id].name.toLowerCase())
  );
  const movieList = filteredMovies.map(movie => movie.moviename).join(', ');


  return (
    <div className="theater-detail-container">
      <div className="theater-info">
        <img src={`C:/Users/User/Desktop/projects/finishproject/public/theaters/${theaterDetails[id].src}`} alt={`Resim ${id}`} style={{ height: '300px' }} />
        <p>{theaterDetails[id].name}</p>
        <p>{theaterDetails[id].phone}</p>
        <p>
          Showings: {filteredMovies.length > 0 ? (
        <div>
          <h3>Movies</h3>
          <p>Movies: {movieList}</p>
        </div>
      ) : (
        <p>No movies found for {theaterDetails[id].name}.</p>
      )}
        </p>
      </div>
    </div>
  );
};
export default TheaterDetail;