import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ActorDetailsPage = () => {
  const { id } = useParams();
  const [actorData, setActorData] = useState({});

  useEffect(() => {
    // Fetch data from Express API
    fetch(`http://localhost:3001/api/actors/${id}`) // Assuming you have an Express API endpoint to fetch actor by ID
      .then(response => response.json())
      .then(data => setActorData(data))
      .catch(error => console.error('Error fetching actor data:', error));
  }, [id]);

  return (
    <div className="container" style={{margin: "20px",}}>
      <div className="column">
        {actorData.actorprofilepic && 
          <img src={actorData.actorprofilepic} alt="Actor Profile" className="centered-image" style={{border: '3px solid black',}} />
        }
      </div>
      <div className="column">
        <h2>Actor Details</h2>
        <p>Name: {actorData.actorname}</p>
        <p>City: {actorData.actorcity}</p>
        <p>State: {actorData.actorcountry}</p>
        <p>Birth date: {actorData.actorbirthdate}</p>
      </div>
    </div>
  );
};

export default ActorDetailsPage;