import React from 'react';
import styled from 'styled-components';
import NewsDetails from './NewsDetails';

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

const SingleNews = ( ) => {

  return (
    <MainDiv>
      <NewsDetails />

    </MainDiv>
  );
};

export default SingleNews;