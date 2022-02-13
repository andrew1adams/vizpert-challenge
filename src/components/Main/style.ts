import styled from 'styled-components';
import { bg_stripes, ground } from '../../assets';

export const Container = styled.main`
  overflow: hidden;
  height: 100vh;

  .wall-wrapper {
    background: url(${bg_stripes});
    background-size: auto 80%;
    display: flex;
    justify-content: center;
    gap: 45vw;
    align-items: center;
    position: relative;
    height: 50%;

    > img {
      width: 200px;
      height: 200px;
    }

    @media (max-width: 480px) {
      flex-direction: column;

      > img {
        width: 175px;
        height: 175px;
        margin-bottom: 20vh;

        @media (min-height: 768px) {
        }
      }
    }
  }

  .ground-wrapper {
    height: 50%;
    background: url(${ground});
    overflow: hidden;

    @media (max-width: 480px) {
      height: 55vh;
    }
  }
`;
