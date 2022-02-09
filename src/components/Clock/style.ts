import styled from 'styled-components';
import clockBackground from '../../assets/clock_base.svg';

export const Container = styled.div`
  background: url(${clockBackground}) no-repeat center center;
  background-size: cover;
  width: 150px;
  height: 150px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    left: 50%;
    top: 9%;
    height: 60px;
    background: var(--light-purple);
    transform-origin: bottom;
    transform: translateX(-50%) rotateZ(0deg);
    z-index: 100;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 10;
    width: 4px;
    height: 40px;
    background: var(--dark-purple);
    top: 21%;
    left: 50%;
    transform-origin: bottom;
    transform: translateX(-50%) rotateZ(90deg);
  }
`;
