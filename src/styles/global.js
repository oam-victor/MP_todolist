import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root{
        --bg: #ecf1f8;
        --letter: #333;
        --headerBG: #521069;
        --headerLetter: #fff;
        --cardBG: #fff;
        --listButtonBG: #521069;
        --cardBoxShadow: rgba(192, 208, 230, 0.8);
        --cardBorderTop: rgba(230, 236, 245, 0.4);
        --modalOverlay: rgba(32, 6, 41, 0.3);
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        height: 100%;
        font: 14px "Roboto", sans-serif;
        background: var(--bg);
        color: var(--letter);
        -webkit-font-smoothing: antialiased !important;
    }

    ul{
        list-style: none;
    }
`;
