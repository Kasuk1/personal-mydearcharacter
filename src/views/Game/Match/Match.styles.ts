import styled from 'styled-components';

const MatchStyles = styled.section`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.paragraphColor};
  padding: 0 3rem;
  padding-top: 15rem;
  padding-bottom: 5rem;
  transition: all 0.2s;

  .match {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;

    &__headers {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & h1 {
        font-size: 5rem;
      }

      & button {
        background-color: ${(props) => props.theme.buttonPrimaryTextColor};
        border: none;
        border-radius: 5rem;
        cursor: pointer;
        padding: 1rem 2rem;
        transition: all 0.2s;

        &:hover {
          background-color: #cc0000;
          color: #fff;
          transform: translateY(-10%);
        }
      }
    }

    &__player {
      display: inline-block;
      background-color: ${(props) => props.theme.buttonPrimaryBackgroundColor};
      border-radius: 5rem;
      color: ${(props) => props.theme.tertiaryColor};
      padding: 0.8rem 3rem 1.5rem;
      font-size: 2.5rem;
      position: relative;
      top: 2rem;
      z-index: 2;
      align-self: flex-start;
      width: 35%;
      min-width: 30rem;
    }

    &__deck {
      overflow-x: auto;
      padding: 1.2rem;
      display: flex;
      gap: 0.6rem;

      &::-webkit-scrollbar {
        height: 1rem;

        &-track {
          background: ${(props) => props.theme.paragraphColor};
        }
        &-thumb {
          background: ${(props) => props.theme.secondaryColor};
        }
      }
    }

    &__state {
      font-size: 2.5rem;
      margin: 10rem 0 8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;

      &-message {
        animation: opacityLoadingFull 0.6s infinite alternate;
      }

      &-play {
        background-color: #b1dc2e;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 2rem;
        font-weight: 600;
        text-transform: uppercase;
        padding: 5.5rem 4.5rem;
        opacity: 0.7;
        transition: all 0.2s;

        &:hover {
          background-color: #9fc427;
          opacity: 1;
        }
      }
    }
  }
`;

export default MatchStyles;
