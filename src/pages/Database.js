import React from 'react';
import bear from './bear.jpg'
import styled from 'styled-components';
import ActorListComponent from './ActorList';

const MainDiv = styled.div`
  width: 80%;
  background-color: white;
  margin-left: auto;
  margin-right: auto;,
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;

const Database = () => {
  return (
    <MainDiv>
        <ActorListComponent />
    </MainDiv>
  );
};

export default Database;