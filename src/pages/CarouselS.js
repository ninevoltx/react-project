import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselS = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchActors();
  }, []);

  const fetchActors = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/actors'); // Adjust the URL based on your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const currentMonth = new Date().getMonth() + 1;
      const filteredActors = data.filter(actor => {
        const birthMonth = new Date(actor.actorbirthdate).getMonth() + 1;
        return birthMonth === currentMonth;
      });
      const sortedActors = filteredActors.sort((a, b) => a.actorname.localeCompare(b.actorname));
      const slicedActors = sortedActors.slice(0, 10);
      setActors(slicedActors);
    } catch (error) {
      console.error('Error fetching actor data:', error);
    }
  };

  return (
    <Carousel>
      {actors.map(actor => (
        <Carousel.Item key={actor.actorID}>
          <img
            className="d-block w-100"
            src={actor.actorprofilepic}
            alt={actor.actorname}
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>{actor.actorname}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselS;