import React from 'react';
import styled from 'styled-components';
import ActorDetailsPage from './ActorDetailsPage';

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

const ActorDetails = () => {
  return (
    <MainDiv>
        <ActorDetailsPage />
    </MainDiv>
  );
};
export default ActorDetails;