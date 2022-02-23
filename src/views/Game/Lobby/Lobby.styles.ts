import styled from 'styled-components';

const LobbyStyles = styled.section`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.paragraphColor};
  padding: 0 3rem;
  padding-top: 10rem;
  padding-bottom: 5rem;
  transition: all 0.2s;

  .lobby {
    grid-column: 2 / 12;
    display: flex;
    flex-direction: column;
    gap: 5rem;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & button {
        background-color: ${(props) => props.theme.buttonPrimaryTextColor};
        border: none;
        border-radius: 5rem;
        cursor: pointer;
        padding: 1rem 2rem;
        transition: all 0.2s;

        &:hover {
          background-color: #52c616;
          color: #fff;
          font-weight: 500;
          transform: translateY(-10%);
        }
      }
    }

    &__rooms {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export default LobbyStyles;
