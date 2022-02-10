import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    list-style: none;

    --light-purple: #8310DD;
    --dark-purple: #633585;
  }
`;
