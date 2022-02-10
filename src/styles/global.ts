import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --secondary: rgb(110, 189, 0);
        --primary: rgb(45, 103, 127);
        --light: rgb(238, 238, 238);
        --muted:  #6c757d;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    html, body, #root {
        min-height: 100vh;
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
        background-color: black;
        opacity: 80%;
    }

    .btn-primary {
        color: white;
        background-color: var(--primary);
        border-color: var(--primary);
        
        &:hover {
            background-color: rgb(55, 120, 145);
            border-color: rgb(55, 120, 145);
        }
    }

    .btn-secondary {
        color: white;
        background-color: var(--secondary);
        border-color: var(--secondary);
                
        &:hover {
            background-color: rgb(130, 210, 100);
            border-color: rgb(130, 210, 100);
        }
    }

    .btn-light {
        color: var(--muted);
        background-color: var(--light);
        border-color: var(--light);
                        
        &:hover {
            background-color: rgb(245, 248, 248);
            border-color: rgb(245, 248, 248);
        }
    }

    .text-secondary {
        color: var(--secondary) !important;
    }
`;
