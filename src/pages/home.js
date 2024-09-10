import React from 'react';
import CarouselS from './CarouselS';
import styled from 'styled-components';


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

const HomePage = () => {
  return (
    <MainDiv>
      <CarouselS />

    </MainDiv>
  );
};
export default HomePage;