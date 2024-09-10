import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './pages.css';

const ImageGrid = () => {
  const images = [
    { id: 1, src: 'C:/Users/User/Desktop/projects/finishproject/public/theaters/circle.jpg', alt: 'Image 1', text: 'Circle Theaters' },
    { id: 2, src: 'C:/Users/User/Desktop/projects/finishproject/public/theaters/grove.jpg', alt: 'Image 2', text: 'Grove Theater' },
    { id: 3, src: 'C:/Users/User/Desktop/projects/finishproject/public/theaters/living.jpg', alt: 'Image 3', text: 'Living Room' },
    { id: 4, src: 'C:/Users/User/Desktop/projects/finishproject/public/theaters/patriot.jpg', alt: 'Image 4', text: 'Patriot Saloons' },
  ];

  return (
    <div className="maindiv">
      {images.map((image) => (
        <div key={image.id} className="cell">
          <Link to={`/theaters/${image.id}`}>
            <img src={image.src} alt={image.alt} style={{ height: '300px' }} className="img1"/>
            <p>{image.text}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
const MainDiv = styled.div`
  width: 80%;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;

const Theaters = () => {
  return (
    <MainDiv>
        <ImageGrid />
    </MainDiv>
  );
};
export default Theaters;