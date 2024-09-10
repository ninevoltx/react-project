import React from 'react';
import styled from 'styled-components';
import bear from './bear.jpg'
import CarouselM from './CarouselM';

const MainDiv = styled.div`
  width: 80%;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  vertical-align:top;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;
const AdDiv = styled.div`
  width: 100%;
  height: 90px;
  background-color: white;
  padding: auto;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  overflow: hidden;
  }
`;
const InTheaters = () => {
    return (
      <MainDiv>
        <AdDiv><div><h1>NEW THIS YEAR</h1></div></AdDiv>
        <CarouselM />
      </MainDiv>
    );
  };
  
export default InTheaters;