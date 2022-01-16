import styled from "styled-components";

const FooterStyles = styled.footer`
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.paragraphColor};
    padding: 8rem 3rem;
    transition: all 0.2s;

    .footer {
        &__left {
            grid-column: 1 / 6;

            @media only screen and (min-width: 37.5em) {
                grid-column: 2 / 4;
            }
        }

        &__right {
            grid-column: 7 / -1;

            @media only screen and (min-width: 37.5em) {
                grid-column: 5 / 12;
            }
        }

        &__logo {
            font-size: 5rem;
            font-weight: 900;
            letter-spacing: -.8rem;
        }

        &__list {
            text-transform: uppercase;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            @media only screen and (min-width: 37.5em) {
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: flex-end;
                align-items: center;
                gap: 4.5rem;
            }
        }

        &__item {
            font-size: 1.2rem;

            @media only screen and (min-width: 37.5em) {
                font-size: 1.4rem;
            }

            &:last-child {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                gap: 1rem;

                @media only screen and (min-width: 37.5em) {
                    flex-direction: row;
                    align-items: center;
                }
            }

            & a {
                cursor: pointer;
                color: ${props => props.theme.paragraphColor};
            }
        }

        &__media {
            display: flex;
            gap: 0.8rem;

            

            &--item {
                font-size: 1.2rem;

                @media only screen and (min-width: 37.5em) {
                    font-size: 1.8rem;
                }
            }
        }
    }
`;

export default FooterStyles;
