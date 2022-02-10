import styled from 'styled-components';

export const Container = styled.ul`
  width: 350px;
  height: 100px;
  padding: 2.7px 5px 5px;
  gap: 3px;
  display: flex;

  &.active {
    flex-direction: row-reverse;
  }
`;
