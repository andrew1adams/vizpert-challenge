import styled, { css } from 'styled-components';

interface BookProps {
  isDraggingItem: boolean;
}

export const Container = styled.li<BookProps>`
  background: transparent;
  display: flex;

  img {
    width: 35px;
    height: 100%;
  }

  ${({ isDraggingItem }) =>
    isDraggingItem &&
    css`
      border: 4px dashed rgba(0, 0, 0, 0.7);
      width: 35px;

      img {
        opacity: 0;
      }
    `}
`;
