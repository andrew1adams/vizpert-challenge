import styled, { css } from 'styled-components';
import { BookStyleProps } from '../../interfaces';

export const Container = styled.li<BookStyleProps>`
  background: transparent;
  display: flex;

  ${({ emptyShelf }) =>
    emptyShelf &&
    css`
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      color: #fff;
    `}

  img {
    width: 35px;
    height: 100%;
    cursor: grab;
    transition: all 0.3s ease-in-out;

    ${({ isDraggable, isOver = false }) =>
      isDraggable &&
      css`
        transform: ${isOver ? 'scale(1)' : 'scale(1.2)'};
      `}

    @media (max-width: 480px) {
      width: 25px;
    }
  }
`;
