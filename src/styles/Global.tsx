import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html, body {
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    background: #f1f2f6;
  }
`;
