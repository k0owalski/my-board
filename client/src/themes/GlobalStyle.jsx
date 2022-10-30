import { createGlobalStyle } from 'styled-components';

import montserratLight from 'assets/fonts/Montserrat-Light.woff2';
import montserratRegular from 'assets/fonts/Montserrat-Regular.woff2';
import montserratMedium from 'assets/fonts/Montserrat-Medium.woff2';
import montserratSemiBold from 'assets/fonts/Montserrat-SemiBold.woff2';

import interLight from 'assets/fonts/Inter-Light.woff2';
import interRegular from 'assets/fonts/Inter-Regular.woff2';
import interMedium from 'assets/fonts/Inter-Medium.woff2';
import interSemiBold from 'assets/fonts/Inter-SemiBold.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face { font-family: 'Montserrat'; src: url('${montserratLight}') format('woff2'); font-weight: 300; }
  @font-face { font-family: 'Montserrat'; src: url('${montserratRegular}') format('woff2'); font-weight: 400; }
  @font-face { font-family: 'Montserrat'; src: url('${montserratMedium}') format('woff2'); font-weight: 500; }
  @font-face { font-family: 'Montserrat'; src: url('${montserratSemiBold}') format('woff2'); font-weight: 600; }

  @font-face { font-family: 'Inter'; src: url('${interLight}') format('woff2'); font-weight: 300; }
  @font-face { font-family: 'Inter'; src: url('${interRegular}') format('woff2'); font-weight: 400; }
  @font-face { font-family: 'Inter'; src: url('${interMedium}') format('woff2'); font-weight: 500; }
  @font-face { font-family: 'Inter'; src: url('${interSemiBold}') format('woff2'); font-weight: 600; }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --color-primary: 129, 35, 224;
    --color-text: 68, 68, 68;
    --color-background: 244, 244, 244;
    --color-error: 203, 26, 50;
    --color-accept: 26, 203, 97;
  }

  html {
    &::-webkit-scrollbar { width: 4px; }
    &::-webkit-scrollbar-track { background: rgba(var(--color-text), .08); }
    &::-webkit-scrollbar-thumb { background: rgb(var(--color-primary)); }
  }

  body {
    width: 100%;

    font-family: 'Montserrat';

    color: rgb(var(--color-text));
    background: rgb(var(--color-background));
  }

  input, button {
    color: rgb(var(--color-text));
    background: transparent;
    border: none;
    border-radius: 2px;

    outline: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
