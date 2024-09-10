import React from 'react';
import styled from 'styled-components';
import TheaterDetail from './TheaterDetail';

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

const TheaterDetailPage = () => {
  return (
    <MainDiv>
        <TheaterDetail />
    </MainDiv>
  );
};
export default TheaterDetailPage;