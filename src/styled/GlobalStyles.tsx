import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Figtree', sans-serif;
        color: var(--gray-base);
        margin: 0;
    }
`;
