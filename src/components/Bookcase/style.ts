import styled from 'styled-components';
import { bookcase } from '../../assets';

export const Container = styled.div`
  display: flex;
  align-items: bottom;
  position: absolute;
  bottom: -200px;

  @media (max-width: 480px) {
    bottom: -165px;
  }

  .bookcase-wrapper {
    margin-top: 55px;
    height: 500px;
    width: 500px;
    background: url(${bookcase}) no-repeat center;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 24px;
    padding-left: 25px;
    margin-left: 10vh;
    padding-top: 155px;

    @media (max-width: 480px) {
      margin-left: 10vh;
      padding-top: 113px;
      gap: 0px;
      height: 400px;
      width: 400px;
    }
  }
`;
