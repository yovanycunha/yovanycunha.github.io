import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    html {
        font-size: 62.5%;
        --ms-overflow-style: scrollbar;
    }

    html,
    body {
        height: 100%;
    }

    body {
        font-family: "Rubik", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #222222;
    }

    a,
    p,
    span,
    label,
    div,
    b,
    i,
    strong,
    ul,
    li,
    input,
    textarea,
    select,
    td,
    th,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6  {
        font-weight: 400;
    }

    b,
    strong {
        font-weight: 700;
    }
    p {
        font-size: 1rem;
        line-height: 1.6;
    }
    input ,
    select {
        appearance: none;
    }
    ul {
        list-style: none;
    }

`;

export const DefaultContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0;
    min-height: 100vh;
    max-width: 100%;
    width: 100%;
`;

export const ResponseContainer = styled.section`
    margin-right: auto;
    margin-left: auto;
    position: relative;
    width: 100%;
    margin-right: 1.5rem;
    margin-left: 1.5rem;

    @media (min-width: 480px) {
        max-width: 72.8rem;
    }

    @media (min-width: 990px) {
        max-width: 96rem;
    }

    @media (min-width: 1200px) {
        max-width: 11.4rem;
    }
`;
