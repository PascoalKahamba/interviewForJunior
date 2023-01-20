import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 1.5rem;
        font-family: Arial, Helvetica, sans-serif;
        background: #000;
    }
`;

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
`;
