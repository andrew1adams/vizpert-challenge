import styled, { css } from 'styled-components';
import { filter_button, filter_button_active } from '../../assets';
import { ButtonStyleProps } from '../../interfaces';

export const Container = styled.button<ButtonStyleProps>`
  width: 35px;
  height: 35px;
  border: none;
  background: url(${filter_button}) no-repeat center center;

  ${({ isActive }) =>
    isActive &&
    css`
      background: url(${filter_button_active}) no-repeat center center;

      img {
        transform: translateY(5px);
      }
    `}

  img {
    width: 60%;
    height: 60%;
    background: none;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;
