import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from "./App";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
  }
  //!#FF1536
  //? #1976d2
  body {
    background: #1C1C22;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 5px;
    }
     
    &::-webkit-scrollbar-thumb {
      background-color: #1F87FF;
    } 
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p {
    margin: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);



