import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
    }
    * {
        margin: 0;
        padding: 0;
        font: inherit;
        color: inherit;
        font-family: 'Pretendard-Regular';
        text-decoration-line: none;
    }
    :root {
        cursor: default;
    }
    html,
    body {
        height: 100%;
        background-color: #fafafa;
    }
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }
    input{
        border: none;
    }
    button {
        background: none;
        border: 0;
        cursor: pointer;
    }
    article,
    aside,
    header,
    main,
    menu,
    nav,
    section {
        display: block;
    }
`;
export default GlobalStyle;
