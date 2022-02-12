import styled from 'styled-components';
import backgroundBookcase from '../../assets/bookcase.svg';

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: bottom;

  .bookcase-wrapper {
    margin-top: 55px;
    margin-right: -100px;
    height: 500px;
    width: 500px;
    background: url(${backgroundBookcase}) no-repeat center;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 23px;
    padding-left: 25px;
    padding-top: 155px;

    @media (max-width: 480px) {
      margin-top: -10px;
      margin-right: -23vw;
      padding-top: 113px;
      gap: 0px;
      height: 400px;
      width: 400px;
    }
  }
`;
