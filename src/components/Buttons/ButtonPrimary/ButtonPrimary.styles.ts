import styled from 'styled-components';

const ButtonPrimaryStyles = styled.div`
    & a {
        background-color: ${props => props.theme.buttonPrimaryBackgroundColor};
        border-radius: 4.8rem;
        box-shadow: 0.5rem 0.6rem 0.5rem rgba(0, 0, 0, 0.25);
        color: ${props => props.theme.buttonPrimaryTextColor};
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;
        padding: 1rem 2.5rem;
        display: inline-flex;
        flex-wrap: wrap;
        transition: all .25s;

        @media only screen and (min-width: 25em) {
            font-size: 2rem;
            padding: 1rem 4.5rem;
        }

        &:hover {
            background-color: ${props => props.theme.buttonPrimaryBackgroundColorHover};
            color: ${props => props.theme.buttonPrimaryTextColorHover};
        }
    }
`;

export default ButtonPrimaryStyles;