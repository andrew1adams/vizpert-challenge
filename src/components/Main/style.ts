import styled from 'styled-components';
import wallBackground from '../../assets/bg_stripes.svg';
import groundBackground from '../../assets/ground.svg';

export const Container = styled.main`
  .wall-wrapper {
    background: url(${wallBackground}) center center;
    background-size: auto 100%;
    height: 55vh;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 200px;
      height: 200px;
    }
  }

  .ground-wrapper {
    background: url(${groundBackground}) center center;
    background-size: auto 100%;
    height: 45vh;
    width: 100vw;
  }
`;
