import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::selection {
        background: #FFCB474D;
    }

    html, :root, body {
        height: 100%;
        font: .8rem Montserrat, Roboto, sans-serif;
        color: rgba(32, 32, 32, .5);
    }

    button {
        cursor: pointer;
    }

    *, button, input {
        letter-spacing: 1px;
        line-height: 26px;
        outline: 0;
    }

    ul {
        list-style: none;
    }

    a {
        color: #000;
        text-decoration: none;
        font-weight: 600;
    }

    input {
        padding: .8rem 2rem;
        border: 0;
        background: #FFF;
        box-shadow: 10px 10px 30px 10px #0000000F;
        
        &::placeholder, & {
            letter-spacing: 1px;
            color: rgba(32, 32, 32, 0.308);
        }
    }
`;

export const StrongElsie = styled.strong`
    font: 3rem 'Elsie Swash Caps';
    color:#202020;
    line-height: 90px;
    font-size: 4rem;
    line-height: 60px;
`;

export default GlobalStyle;