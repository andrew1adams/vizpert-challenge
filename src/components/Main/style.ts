import styled from 'styled-components';
import wallBackground from '../../assets/bg_stripes.svg';
import groundBackground from '../../assets/ground.svg';

export const Container = styled.main`
  overflow: hidden;

  .wall-wrapper {
    background: url(${wallBackground}) center center;
    background-size: auto 100%;
    height: 55vh;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    > img {
      width: 225px;
      height: 225px;
    }

    @media (max-width: 480px) {
      height: 50vh;
      flex-direction: column-reverse;

      > img {
        margin-top: 150px;
        width: 150px;
        height: 150px;

        @media (min-height: 768px) {
          margin-top: 225px;
        }
      }
    }
  }

  .ground-wrapper {
    background: url(${groundBackground}) center center;
    background-size: auto 100%;
    height: 45vh;
    width: 100vw;

    @media (max-width: 480px) {
      height: 50vh;

      > img {
      }
    }
  }
`;
