import styled from 'styled-components';

const CardLoadingStyles = styled.div`
    background-color: ${props => props.theme.cardPrimaryColor};
    border-radius: 0.8rem;
    padding: 2rem 1.8rem;
    width: 19.3rem;
    animation: opacityLoading 0.6s infinite alternate;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    .card-loading {
        &__image {
            background-color: ${props => props.theme.cardSecondaryColor};
            border-radius: 50%;
            width: 15.7rem;
            height: 15.7rem;
        }

        &__info {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            &--anime {
                background-color: ${props => props.theme.cardSecondaryColor};
                border-radius: 0.5rem;
                width: 6rem;
                height: 2rem;
            }

            &--name {
                background-color: ${props => props.theme.cardSecondaryColor};
                border-radius: 0.5rem;
                width: 12rem;
                height: 3rem;
            }
        }
    }
`;

export const CardLoading = () => {
    return (
        <CardLoadingStyles>
            <div className="card-loading__image"></div>
            <div className="card-loading__info">
                <div className="card-loading__info--anime"></div>
                <div className="card-loading__info--name"></div>
            </div>
        </CardLoadingStyles>
    )
}
