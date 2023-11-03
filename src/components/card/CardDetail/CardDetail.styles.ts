import styled from "styled-components";

const CardDetailStyles = styled.article`
  background: linear-gradient(
    90deg,
    hsla(244, 96%, 9%, 1) 0%,
    hsla(203, 81%, 11%, 1) 100%
  );
  //background-color: ${(props) => props.theme.cardPrimaryColor};
  border-radius: 0.8rem;
  box-shadow: 0.5rem 1.5rem 3.5rem rgba(0, 0, 0, 0.25);
  padding: 3rem 2.5rem;
  text-transform: uppercase;
  max-width: 38rem;
  min-width: 20rem;

  display: flex;
  flex-direction: column;

  .card-detail {
    &__name {
      background-color: ${(props) => props.theme.cardSecondaryColor};
      border-radius: 0.8rem;
      color: #bfcadf;
      font-size: 2.5rem;
      font-weight: 900;
      margin: 0 auto;
      padding: 0.5rem 0;
      text-align: center;
      width: 80%;
    }

    &__image {
      margin-top: -10rem;
      bottom: -10rem;
      position: relative;

      & img {
        width: 100%;
        transition: all 0.2s;

        &.clicked {
          transform: scale(1.8);
        }
      }
    }

    &__info {
      background-color: ${(props) => props.theme.cardSecondaryColor};
      border-radius: 0.8rem;
      color: #bfcadf;
      padding: 8.5rem 1.5rem 1rem 1.5rem;

      &__chunk {
        width: 45%;
        margin: 0 auto;
      }

      &--basic {
        height: 22rem;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 0.8rem;
      }

      &--extra {
        display: flex;
        justify-content: space-between;

        &__text {
          font-size: 5rem;
          line-height: 6rem;
        }
      }

      &__subtitle {
        font-size: 0.974rem;
        font-weight: 700;
      }

      &__text {
        font-size: 2.1rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      &__list {
        display: flex;
      }
    }
  }
`;

export default CardDetailStyles;
