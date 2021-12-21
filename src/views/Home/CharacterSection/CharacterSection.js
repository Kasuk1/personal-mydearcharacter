import CharacterSectionStyles from './CharacterSection.styles';

import { ButtonPrimary } from '../../../components/Buttons/ButtonPrimary/ButtonPrimary';

import DragonBallZ from '../../../assets/images/dragonballz2.png';
import Pokemon from '../../../assets/images/pokemon.png';
import SaintSeiya from '../../../assets/images/saintseiya.png';
import RickAndMorty from '../../../assets/images/rickandmorty.png';

export const CharacterSection = () => {
    return (
        <CharacterSectionStyles>
            <div className='character-section--left'>
                <img className='character-section--image' src={DragonBallZ} alt="" />
                <img className='character-section--image' src={Pokemon} alt="" />
                <img className='character-section--image' src={SaintSeiya} alt="" />
                <img className='character-section--image' src={RickAndMorty} alt="" />
            </div>
            <div className='character-section--right'>
                <h2 className='character-section--title'>Find your peer and start an adventure</h2>
                <p className='character-section--text'>Try to open a box and get luck. You can get 2 free boxes when you register.</p>
                <ButtonPrimary path="box" text="Open a box" />
            </div>

        </CharacterSectionStyles>
    )
}
