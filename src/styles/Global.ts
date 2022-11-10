import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
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
    }
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }
    button {
        background: none;
        border: 0;
        cursor: pointer;
    }
    body::-webkit-scrollbar {
        display: none;
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
    button {
        border: none;
        outline: none;
        cursor: pointer;
        font: inherit;
    }
`;
export default GlobalStyle;
