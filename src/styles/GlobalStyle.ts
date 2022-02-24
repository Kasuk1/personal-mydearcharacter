import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 54.5%;
        font-family: "Heebo", sans-serif;

        @media only screen and (min-width: 37.5em) {
            font-size: 58.5%;
        }

        @media only screen and (min-width: 87.5em) {
            font-size: 60.5%;
        }
  
        @media only screen and (min-width: 112.5em) {
            font-size: 62.5%;
        }
    }
    
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    body {
        box-sizing: border-box;
        min-height: 100vh;
    }

    @keyframes opacityLoading {
        from {
            opacity: 0.5;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes opacityLoadingFull {
        from {
            opacity: 0.1;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes leftToRight {
        0% {
          left: -40%;
        }
        100% {
          left: 110%;
        }
    }

    .display-flex {
        display: flex;
    }

    .min-height-60 {
        min-height: 60vh;
    }
    .min-height-70 {
        min-height: 70vh;
    }
    .min-height-80 {
        min-height: 80vh;
    }
`;

export default GlobalStyle;
