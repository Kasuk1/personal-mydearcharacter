import styled from 'styled-components';

const ButtonSubmitStyles = styled.div`
  & button {
    background-color: ${(props) => props.theme.buttonPrimaryBackgroundColor};
    border: none;
    border-radius: 4.8rem;
    box-shadow: 0.5rem 0.6rem 0.5rem rgba(0, 0, 0, 0.25);
    color: ${(props) => props.theme.buttonPrimaryTextColor};
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 1rem 2rem;
    display: inline-flex;
    flex-wrap: wrap;
    transition: all 0.25s;

    @media only screen and (min-width: 25em) {
      font-size: 1.5rem;
      padding: 1.5rem 3rem;
    }

    &:hover {
      background-color: ${(props) =>
        props.theme.buttonPrimaryBackgroundColorHover};
      color: ${(props) => props.theme.buttonPrimaryTextColorHover};
    }
  }
`;

export default ButtonSubmitStyles;
