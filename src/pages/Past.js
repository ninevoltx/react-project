import React from 'react';
import styled from 'styled-components';
import MovieGridComponent from './MovieGridComponent';

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

const Past = () => {
  return (
    <MainDiv>
        <MovieGridComponent />
    </MainDiv>
  );
};
export default Past;