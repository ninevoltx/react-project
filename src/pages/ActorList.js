import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ActorListComponent = () => {
    const [actors, setActors] = useState([]);
    const [searchText, setSearchText] = useState('');
  
    useEffect(() => {
      // Fetch data from Express API for all actors
      fetch('http://localhost:3001/api/actors') // Adjust the URL based on your API endpoint
        .then(response => response.json())
        .then(data => setActors(data))
        .catch(error => console.error('Error fetching actor data:', error));
    }, []);
  
    // Organize actors alphabetically
    const sortedActors = actors.sort((a, b) => a.actorname.localeCompare(b.actorname));
  
    // Organize actors by first letter
    const actorsByLetter = {};
    sortedActors.forEach(actor => {
      const firstLetter = actor.actorname.charAt(0).toUpperCase();
      if (!actorsByLetter[firstLetter]) {
        actorsByLetter[firstLetter] = [];
      }
      actorsByLetter[firstLetter].push(actor);
    });
  
    // Filter actors based on search text
    const filteredActors = sortedActors.filter(actor =>
      actor.actorname.toLowerCase().includes(searchText.toLowerCase())
    );
  
    return (
      <div style={{ width: '100%', padding: '10px' }}>
        <input
          type="text"
          placeholder="Search Actors"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          style={{ width: '80%', maxWidth: '400px', margin: '10px auto', display: 'block' }}
        />
        <div style={{ columnCount: 3, columnGap: '20px' }}>
          {Object.keys(actorsByLetter)
            .sort()
            .map(letter => (
              <ul key={letter} style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ fontWeight: 'bold' }}>{letter}</li>
                {actorsByLetter[letter].map(actor => (
                  <li
                    key={actor.actorID}
                    style={{ display: filteredActors.includes(actor) ? 'block' : 'none' }}
                  >
                    <Link to={`/actors/${actor.actorID}`}>{actor.actorname}</Link>
                  </li>
                ))}
              </ul>
            ))}
        </div>
      </div>
    );
  };
export default ActorListComponent;