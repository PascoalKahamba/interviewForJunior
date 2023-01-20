import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

interface CssProps {
  left: React.CSSProperties["left"];
  top: React.CSSProperties["top"];
}

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
  cursor: pointer;
`;

export const Circle = styled.div<CssProps>`
  position: absolute;
  top: ${({ top }) => top + "px"};
  left: ${({ left }) => left + "px"};
  width: 1.5rem;
  height: 1.5rem;
  border: 0.3rem solid blue;
  border-radius: 100%;
`;
