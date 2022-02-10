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
  }
`;
