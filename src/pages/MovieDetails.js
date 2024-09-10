import React from 'react';
import styled from 'styled-components';
import MovieDetailsPage from './MovieDetailsPage';

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

const MovieDetails = () => {
  return (
    <MainDiv>
        <MovieDetailsPage />
    </MainDiv>
  );
};
export default MovieDetails;