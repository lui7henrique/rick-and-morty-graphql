import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
  }

  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }  

  html, body, #__next {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family:  'Inter', serif;   
    background: ${({ theme }) => theme.colors.black["1000"]};
    color: ${({ theme }) => theme.colors.black["200"]};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.black["100"]};
  }

  p, a {
    color: ${({ theme }) => theme.colors.black["200"]};
  }

  a {
    text-decoration: none
  }
`;
