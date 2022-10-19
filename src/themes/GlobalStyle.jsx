import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --color-primary: 129, 35, 224;
    --color-text: 68, 68, 68;
    --color-background: 244, 244, 244;
    --color-error: 203, 26, 50;
    --color-accept: 26, 203, 97;
  }

  body {
    font-family: 'Montserrat';

    color: rgb(var(--color-text));
    background: rgb(var(--color-background));
  }

  button {
    background: transparent;
    border: none;
    border-radius: 2px;
  }
`;

export default GlobalStyle;
