import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { mediaQueries } from "./shared/breakpoints";

export default createGlobalStyle`
    ${normalize};

    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        background: #090707;
        color: #e6e6e6;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        min-height: 100vh;
        overflow-x: hidden;
        width: 100vw;
    }

    #root {
        height: 100%;
    }

    svg {
        pointer-events: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    .svg-icon{
        width: 1em;
        height: 1em;
    }
    .amp-sidebar{
         width: 100%;
         max-width: unset;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
        background: gray; 
        border-radius: 3px;
    }

    /* important is used to overwrite default driftchat styles */
    #drift-frame-controller {
        left: calc(100vw - 24px);
        transform: translateX(-100%);

        ${mediaQueries.sm} {
            left: calc(100vw - 12px);
         top: calc(100vh - 12px);
         transform: translate(-100%, -100%);
        }
    }
`;
