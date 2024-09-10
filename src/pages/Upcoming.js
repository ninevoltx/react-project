import React from 'react';
import styled from 'styled-components';
import MovieDetailsComponent from './MovieDetailsComponent';

const MainDiv = styled.div`
  width: 80%;
  background-color: white;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;

const Upcoming = () => {
  return (
    <MainDiv>
        <MovieDetailsComponent />
    </MainDiv>
  );
};

export default Upcoming;
