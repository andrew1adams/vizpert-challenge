import React from 'react';
import { Bookcase, Clock } from '..';
import { Container } from './style';
import { logo } from '../../assets';
import { Board } from '../Board';

const Main: React.FC = () => {
  return (
    <Container>
      <div className="wall-wrapper">
        <Clock />
        <Bookcase />
        <img src={logo} alt="Vizpert Logotype" />
      </div>
      <div className="ground-wrapper">
        <Board />
      </div>
    </Container>
  );
};

export default Main;
