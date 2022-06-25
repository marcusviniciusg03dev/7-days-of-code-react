import styled, { createGlobalStyle } from 'styled-components';
import backgroundLines from '../assets/img/lines.png';

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

    body {
        background-image: url(${backgroundLines});
        background-size: contain;
        background-position-x: right;
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
        list-style-type: none;
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
    font: 4rem 'Elsie Swash Caps';
    color: #202020;
    line-height: 90px;
    line-height: 60px;
`;

export const MediumElsie = styled.strong`
    font: 2.5rem 'Elsie Swash Caps';
    color: #202020;
    line-height: 30px;
`;

export const SmallElsie = styled.small`
    font-family: 'Elsie Swash Caps';
    font-size: 1.5rem;
    color: #202020;
    line-height: 2rem;
`;

export default GlobalStyle;