import styled from 'styled-components';

const CharacterSectionStyles = styled.section`
    background-color: ${props => props.theme.primaryColor};
    padding: 4rem 3rem;

    display: grid;
    grid-template-columns: repeat(12, [col-start] minmax(0.5rem, 10.14rem) [col-end]);
    column-gap: 1rem;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 37.5em) {
        padding: 12rem 3rem;
    }

    @media only screen and (min-width: 87.5em) {
        padding: 18rem 3rem;
        column-gap: 1.5rem;
    }
  
    @media only screen and (min-width: 112.5em) {
        column-gap: 2.5rem;
    }

    .character-section {
        &--left {
            grid-column: 1 / 5;
            display: flex;
            flex-wrap: wrap;
            gap: 3rem;

            @media only screen and (min-width: 37.5em) {
                grid-column: 2 / 6;
            }

            @media only screen and (min-width: 87.5em) {
                grid-column: 2 / 7;
                column-gap: 16rem;
                row-gap: 12rem;
            }
        }

        &--right {
            grid-column: 6 / 13;
            display: flex;
            flex-direction: column;
            gap: 1.2rem;

            @media only screen and (min-width: 37.5em) {
                grid-column: 7 / 12;
            }

            @media only screen and (min-width: 87.5em) {
                grid-column: 8 / 12;
            }
        }

        &--image {
            width: 100%;

            @media only screen and (min-width: 37.5em) {
                width: 15rem;
            }

            @media only screen and (min-width: 87.5em) {
                width: 18rem;
            }
        }

        &--title {
            color: ${props => props.theme.paragraphColor};
            font-size: 7.5vw;
            line-height: 7.5vw;

            @media only screen and (min-width: 37.5em) {
                font-size: 4.8rem;
                line-height: 5.2rem;
            }
        }

        &--text {
            color: ${props => props.theme.paragraphColor};
            font-size: 1.2rem;
            margin-bottom: 3rem;

            @media only screen and (min-width: 87.5em) {
                font-size: 1.8rem;
            }
        }
    }
`;

export default CharacterSectionStyles;