import styled from 'styled-components';
import clockBackground from '../../assets/clock_base.svg';

interface ClockStylesProps {
  time: {
    hour: number;
    minutes: number;
  };
}

export const Container = styled.div<ClockStylesProps>`
  @media (min-width: 768px) {
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
      top: 7.5%;
      height: 60px;
      background: var(--light-purple);
      transform-origin: bottom;
      transform: translateX(-50%)
        rotate(${({ time }) => time.minutes * 6 + 'deg'});
      z-index: 100;
    }

    &::before {
      content: '';
      position: absolute;
      z-index: 10;
      width: 4px;
      height: 40px;
      background: var(--dark-purple);
      top: 20.75%;
      left: 50%;
      transform-origin: bottom;
      transform: translateX(-50%)
        rotate(${({ time }) => time.hour * 30 + 'deg'});
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
