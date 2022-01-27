import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: rgb(245, 245, 245);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: Roboto, sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    p, ul {
        margin: 0;
    }

    // bootstrap overrides

    .btn:focus {
        box-shadow: none;
    }
    .offcanvas {
        background-color: #000;
        opacity: 80%;
    }
`