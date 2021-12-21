import styled from 'styled-components';

const HeroSectionStyles = styled.section`
    background-color: ${props => props.theme.primaryColor};
    padding: 0 3rem;
    padding-top: 7rem;
    transition: all 0.2s;

    display: grid;
    grid-template-columns: repeat(12, [col-start] minmax(0.5rem, 10.14rem) [col-end]);
    column-gap: 1rem;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 87.5em) {
        column-gap: 1.5rem;
        padding-top: 8rem;
    }
  
    @media only screen and (min-width: 112.5em) {
        column-gap: 2.5rem;
        padding-top: 10rem;
    }


    .hero-section {
        &--left {
            width: 100%;
            height: 100%;
            grid-column: 1 / 9;
            grid-row: 1 / 2;
            z-index: 10;
            padding: 7rem 0;

            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1.8rem;

            @media only screen and (min-width: 37.5em) {
                grid-column: 2 / 8;
                padding: 14vw 0;
            }

            @media only screen and (min-width: 87.5em) {
                padding: 14rem 0;
            }
        }

        &--right {
            width: 100%;
            height: 100%;
            z-index: 5;
            position: relative;
            display: none;

            @media only screen and (min-width: 25em) {
                display: block;
                grid-column: 5 / -1;
                grid-row: 1 / 2;
            }

            @media only screen and (min-width: 37.5em) {
                grid-column: 4 / 12;
            }

            @media only screen and (min-width: 87.5em) {
                grid-column: 5 / 12;
            }
        }

        &__title {
            color: ${props => props.theme.headerColor};
            font-size: 6.1vw;
            line-height: 7vw;
            font-weight: 900;
            
            @media only screen and (min-width: 37.5em) {
                line-height: 6vw;
            }

            @media only screen and (min-width: 112.5em) {
                font-size: 13rem;
                line-height: 11.5rem;
            }
        }

        &__actions {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            @media only screen and (min-width: 37.5em) {
                margin-top: 3.5rem;
            }

            @media only screen and (min-width: 87.5em) {
                flex-direction: row;
                align-items: center;
            }
        }

        &__span {
            color: ${props => props.theme.paragraphColor};
            font-size: 1.2rem;
            width: max-content;
            transition: all .25s;

            @media only screen and (min-width: 87.5em) {
                font-size: 1.8rem;
            }

            &:hover {
                margin-left: 0.5rem;
            }
        }

        &__image {
            width: 100%;
            position: absolute;
            top: 8vw;

            @media only screen and (min-width: 37.5em) {
                top: 2.5vw;
            }

            @media only screen and (min-width: 125em) {
                top: 1vw;
            }

            & img {
                width: 100%;
            }

            &::before {
                content: '';
                background-color: ${props => props.theme.secondaryColor};
                border-radius: 50%;
                width: 70%;
                height: 70%;
                position: absolute;
                bottom: 18%;
                right: 0;
                z-index: -1;
                transition: all .2s;
            }

            &:hover::before {
                transform: scale(0.95);
            }
        }
    }
`;

export default HeroSectionStyles;