import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
        box-sizing: border-box;

        @media only screen and (min-width: 37.5em) {
            font-size: 60.5%;
        }

        @media only screen and (min-width: 87.5em) {
            
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
            opacity: 0.75;
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

    @keyframes topToBottomPlayer1Pointer {
        0% {
            top: 10rem;
            transform: rotateY(0);
        }
        100% {
            top: 12.5rem;
            transform: rotateY(360deg);
        }
    }

    @keyframes bottomToTopPlayer2Pointer {
        0% {
            bottom: 10rem;
            transform: rotateY(0);
        }
        100% {
            bottom: 12.5rem;
            transform: rotateY(360deg);
        }
    }

    @keyframes rotateYaxis {
        0% {
            transform: rotateY(0);
        }
        100% {
            transform: rotateY(360deg);
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(0.95);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes pulsePlayButton  {
        0% {
            opacity: 0.85;
            transform: scale(0.8);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes rotateSquare {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
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
    .min-height-85 {
        min-height: 85vh;
    }
    .min-height-90 {
        min-height: 90vh;
    }
    .min-height-100 {
        min-height: 100vh;
    }
`;
