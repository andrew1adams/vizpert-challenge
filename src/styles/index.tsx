import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Courier Prime', monospace;
    letter-spacing: .2rem;

    --light-purple: #8310DD;
    --dark-purple: #633585;
  }
`;
