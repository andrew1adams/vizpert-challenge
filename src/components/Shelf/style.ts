import styled from 'styled-components';

export const Container = styled.ul`
  width: 350px;
  height: 100px;
  padding: 2.7px 0.5vw 5px 0.5vw;
  gap: 3px;
  display: flex;

  &.reverse {
    flex-direction: row-reverse;
  }

  @media (max-width: 480px) {
    padding: 2px 5px 5px 0px;
    width: 275px;
    height: 99px;
  }
`;
