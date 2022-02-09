import React from 'react';
import { Clock } from '..';
import { Container } from './style';

const Main: React.FC = () => {
  return (
    <Container>
      <div className="wall-wrapper">
        <Clock />
      </div>
      <div className="ground-wrapper"></div>
    </Container>
  );
};

export default Main;
