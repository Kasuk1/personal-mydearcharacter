import styled from 'styled-components';

const LoginStyles = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  padding: 8rem 3rem;
  padding-top: 12rem;
  transition: all 0.2s;

  @media only screen and (min-width: 87.5em) {
    padding-top: 15rem;
  }

  @media only screen and (min-width: 112.5em) {
  }

  .login-page {
    &__left {
      display: none;

      @media only screen and (min-width: 37.5em) {
        display: block;
        grid-column: 1 / 7;
      }

      @media only screen and (min-width: 87.5em) {
        grid-column: 2 / 7;
      }

      & img {
        width: 100%;
      }
    }

    &__right {
      grid-column: 1 / -1;
      grid-row: 1 / 2;

      @media only screen and (min-width: 25em) {
      }

      @media only screen and (min-width: 37.5em) {
        grid-column: 7 / 12;
      }

      @media only screen and (min-width: 87.5em) {
        grid-column: 8 / 12;
      }
    }
  }

  .login-form {
    background-color: ${(props) => props.theme.cardPrimaryColor};
    border-radius: 0.5rem;
    padding: 3rem 3rem 5rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    & h2,
    p {
      color: ${(props) => props.theme.cardSingleTextColor};
    }

    & button {
      margin-top: 1.8rem;
    }

    &__input {
      background-color: ${(props) => props.theme.cardSingleTextColor};
      border: none;
      border-radius: 0.5rem;
      color: ${(props) => props.theme.cardPrimaryColor};
      font-family: inherit;
      font-size: 1.5rem;
      padding: 1rem 1.5rem;
      width: 100%;
      height: 5rem;

      &::placeholder {
        color: ${(props) => props.theme.cardPrimaryColor};
      }

      &:focus {
        outline: none;
        border: 0.3rem solid ${(props) => props.theme.headerColor};
      }
    }
  }
`;

export default LoginStyles;
