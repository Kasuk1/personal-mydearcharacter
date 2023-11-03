import styled from "styled-components";

const ButtonPrimaryStyles = styled.div`
  background: linear-gradient(
    25deg,
    hsla(0, 0%, 0%, 1) 0%,
    hsla(219, 100%, 15%, 1) 100%
  );
  position: relative;
  border-radius: 4.8rem;
  box-shadow: 0.5rem 0.6rem 0.5rem rgba(0, 0, 0, 0.25);
  padding: 1rem 4rem;
  cursor: pointer;
  z-index: 1;

  @media only screen and (min-width: 25em) {
    font-size: 2rem;
    padding: 1rem 4.5rem;
  }
  @media only screen and (min-width: 57.5em) {
    font-size: 2rem;
    padding: 1rem 6rem;
  }

  &::before {
    position: absolute;
    border-radius: 4.8rem;
    box-shadow: 0.5rem 0.6rem 0.5rem rgba(0, 0, 0, 0.25);
    background: linear-gradient(
      320deg,
      hsla(0, 0%, 0%, 1) 0%,
      hsla(219, 100%, 15%, 1) 100%
    );
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    transition: opacity 0.4s linear;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }

  & a {
    /* background: linear-gradient(
      90deg,
      hsla(220, 61%, 30%, 1) 0%,
      hsla(219, 100%, 15%, 1) 100%
    ); */
    color: #e9eff8;
    font-size: 1.5rem;
    font-weight: 700;

    &:hover {
      //background: transparent;
    }

    @media only screen and (min-width: 25em) {
      font-size: 2rem;
    }
  }
`;

export default ButtonPrimaryStyles;
