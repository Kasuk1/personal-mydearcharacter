import styled from 'styled-components';

const ButtonPrimaryStyles = styled.div`
    & a {
        background-color: ${props => props.theme.buttonPrimaryBackgroundColor};
        border-radius: 4.8rem;
        color: ${props => props.theme.buttonPrimaryTextColor};
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        padding: 1rem 4.5rem;
        width: max-content;
        transition: all .25s;

        @media only screen and (min-width: 37.5em) {
            font-size: 2rem;
        }

        &:hover {
            background-color: ${props => props.theme.buttonPrimaryBackgroundColorHover};
            color: ${props => props.theme.buttonPrimaryTextColorHover};
        }
    }
`;

export default ButtonPrimaryStyles;