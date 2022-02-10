import styled from 'styled-components';
import backgroundBookcase from '../../assets/bookcase.svg';

export const Container = styled.div`
  display: flex;

  .bookcase-wrapper {
    margin-top: 40vh;
    margin-right: -100px;
    height: 500px;
    width: 500px;
    background: url(${backgroundBookcase}) no-repeat center;
    display: flex;
    flex-direction: column;
    gap: 23px;
    padding-left: 25px;
    padding-top: 155px;

    .shelf {
      width: 350px;
      height: 100px;
      padding: 3px 5px 5px;
      display: flex;

      img {
        height: 90px;
        width: 37px;
      }
    }

    .reverse-order {
      flex-direction: row-reverse;
    }
  }
`;
