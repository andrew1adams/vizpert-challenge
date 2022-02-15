import styled from 'styled-components';
import { board } from '../../assets';

export const Container = styled.div`
  background: url(${board}) no-repeat center;
  background-size: 90% 100%;
  background-position-y: 10px;
  display: flex;
  width: 425px;
  position: absolute;
  left: 10vw;
  bottom: 0;

  @media (max-width: 480px) {
    width: 350px;
    background-position-y: 5px;
    transform: translateY(-10px);
  }

  @media (max-width: 375px) {
    width: 325px;
    background-position-y: 0px;
  }

  > img {
    max-width: 50%;

    @media (max-width: 480px) {
      transform: scale(1.1);
    }
  }

  > div {
    display: flex;
    width: 50%;

    .sorter-wrapper {
      display: flex;
      width: 80%;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      align-items: center;

      h2 {
        color: #ccc;

        @media (max-width: 480px) {
          font-size: 1rem;
        }
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 12.5px;
      }

      hr {
        background-color: #ccc;
        border: none;
        width: 90%;
        height: 3px;
      }

      > button {
        width: 100%;
        height: 40px;
        background: 0;
        border: 0;
        position: relative;

        :active {
          span {
            transform: translateY(5px);
          }

          img {
            transform: scaleY(-1);
          }
        }

        span {
          display: block;
          height: 20px;
          position: relative;
          z-index: 100;
          color: #353535;
          opacity: 0.4;
          font-weight: bold;

          text-align: center;

          @media (max-width: 480px) {
            height: 25px;
            text-align: center;
          }
        }

        img {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
  }
`;
