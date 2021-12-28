import CardDetailStyles from './CardDetail.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'

export const CardDetail = ({ name, image, sprites, anime, types, abilities, height, weight, price, level, power }) => {
    return (
        <CardDetailStyles>
            <h3 className='card-detail__name'>{name}</h3>
            <div className='card-detail__image'>
                {image && <img src={image} alt={name} />}
                {sprites && <img src={sprites.other['official-artwork'].front_default} alt={name} />}
            </div>
            <div className='card-detail__info'>
                <div className='card-detail__info--basic'>
                    <div className='card-detail__info__chunk'>
                        <h4 className='card-detail__info__subtitle'>Anime</h4>
                        <p className='card-detail__info__text'>{anime ? anime : 'pokémon'}</p>
                    </div>
                    <div className='card-detail__info__chunk'>
                        <h4 className='card-detail__info__subtitle'>Type</h4>
                        <ul className='card-detail__info__list'>
                            <li className='card-detail__info__text'>{types && types.map((type) => type.type.name).join(", ")}</li>
                        </ul>
                    </div>

                    <div className='card-detail__info__chunk'>
                        <h4 className='card-detail__info__subtitle'>Skill</h4>
                        <ul className='card-detail__info__list'>
                            <li className='card-detail__info__text'>{abilities && abilities.map(({ ability }) => ability.name).join(", ")}</li>
                        </ul>
                    </div>

                    <div className='card-detail__info__chunk'>
                        <h4 className='card-detail__info__subtitle'>Price</h4>
                        <p className='card-detail__info__text'>{price}<FontAwesomeIcon icon={faCoins} /></p>
                    </div>

                    <div className='card-detail__info__chunk'>
                        <h4 className='card-detail__info__subtitle'>Height</h4>
                        <p className='card-detail__info__text'>{Math.round(height * 0.10)}m</p>
                    </div>

                    <div className='card-detail__info__chunk'>
                        <h4 className='card-detail__info__subtitle'>Weight</h4>
                        <p className='card-detail__info__text'>{Math.round(weight * 0.10)}kg</p>
                    </div>

                </div>
                <div className='card-detail__info--extra'>
                    <div className='card-detail__info__chunk'>
                        <h4 className='card-detail__info__subtitle'>Level</h4>
                        <p className='card-detail__info--extra__text'>{level ? level : 0}</p>
                    </div>
                    <div className='card-detail__info__chunk'>
                        <h4 className='card-detail__info__subtitle'>Power</h4>
                        <p className='card-detail__info--extra__text'>{power ? power : 100}</p>
                    </div>
                </div>
            </div>
        </CardDetailStyles>
    )
}
