import styled from "styled-components";

const CardStyles = styled.article`
    background-color: ${props => props.theme.cardPrimaryColor};
    color: ${props => props.theme.cardSingleTextColor};
    cursor: pointer;
    border-radius: 0.8rem;
    box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
    padding: 2rem 1.8rem;
    text-transform: uppercase;
    transition: all 0.2s;
    width: 19.3rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    &:hover .card__image {
        transform: scale(1.3);
    }

    .card {
        &__anime {
            font-size: 1.2rem;
            font-weight: 800;
        }

        &__name {
            font-size: 2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &__image {
            transition: all 0.2s;

            & img {
                width: 100%;
            }
        }
    }
`;

export default CardStyles;
