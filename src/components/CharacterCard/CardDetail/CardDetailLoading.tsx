import styled from "styled-components";

const CardDetailLoadingStyles = styled.div`
    background-color: ${(props) => props.theme.cardPrimaryColor};
    border-radius: 0.8rem;
    padding: 3rem 2.5rem;
    max-width: 38rem;
    min-width: 20rem;
    animation: opacityLoading 0.6s infinite alternate;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    

    .card-detail-loading {
        &__subtitle  {
            height: 1.8rem;
        }

        &__basic {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
        }

        &__info {
            background-color: ${props => props.theme.cardSecondaryColor};
            border-radius: 0.8rem;
            padding: 3rem 1.5rem;

            &--normal {
                height: 18rem;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                gap: 0.8rem;
            }

            &--extra {
                display: flex;
                justify-content: space-between;
            }
        }

        &__name {
            background-color: ${(props) => props.theme.cardSecondaryColor};
            border-radius: 0.8rem;
            margin: 0 auto;
            width: 80%;
            height: 4.7rem;
        }

        &__image {
            aspect-ratio: 1 / 1;
            background-color: ${props => props.theme.cardSecondaryColor};
            border-radius: 50%;
            width: 90%;
        }

        &__chunk {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            & > * {
                background-color: ${(props) => props.theme.cardExtraLoadingColor};
                border-radius: 0.5rem;
            }

            & > p {
                height: 2.5rem;
            }

            & > span {
                height: 5rem;
            }
        }

        &__subtitle {
            width: 50%;
        }

        &__level {
            width: 9rem;
        }

        &__power {
            width: 10rem;
        }
    }
`;

export const CardDetailLoading = () => {
    return (
        <CardDetailLoadingStyles>
            <div className="card-detail-loading__basic">
                <div className="card-detail-loading__name"></div>
                <div className="card-detail-loading__image"></div>
            </div>
            <div className="card-detail-loading__info">
                <div className="card-detail-loading__info--normal">
                    <div className="card-detail-loading__chunk">
                        <div className="card-detail-loading__subtitle"></div>
                        <p className="card-detail-loading__anime"></p>
                    </div>
                    <div className="card-detail-loading__chunk">
                        <div className="card-detail-loading__subtitle"></div>
                        <p className="card-detail-loading__type"></p>
                    </div>
                    <div className="card-detail-loading__chunk">
                        <div className="card-detail-loading__subtitle"></div>
                        <p className="card-detail-loading__skill"></p>
                    </div>
                    <div className="card-detail-loading__chunk">
                        <div className="card-detail-loading__subtitle"></div>
                        <p className="card-detail-loading__height"></p>
                    </div>
                    <div className="card-detail-loading__chunk">
                        <div className="card-detail-loading__subtitle"></div>
                        <p className="card-detail-loading__weight"></p>
                    </div>
                </div>
                <div className="card-detail-loading__info--extra">
                    <div className="card-detail-loading__chunk">
                        <div className="card-detail-loading__subtitle"></div>
                        <span className="card-detail-loading__level"></span>
                    </div>
                    <div className="card-detail-loading__chunk">
                        <div className="card-detail-loading__subtitle"></div>
                        <span className="card-detail-loading__power"></span>
                    </div>
                </div>
            </div>
        </CardDetailLoadingStyles>
    )
}

