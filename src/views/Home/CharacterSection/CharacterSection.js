import CharacterSectionStyles from './CharacterSection.styles';

import { Container } from '../../../components/layout/Container/Container';
import { ButtonPrimary } from '../../../components/Buttons/ButtonPrimary/ButtonPrimary';
import { Heading2 } from '../../../components/Headings/Heading2/Heading2';
import { Paragraph } from '../../../components/Headings/Paragraph/Paragraph';

import DragonBallZ from '../../../assets/images/dragonballz2.png';
import Pokemon from '../../../assets/images/pokemon.png';
import SaintSeiya from '../../../assets/images/saintseiya.png';
import RickAndMorty from '../../../assets/images/rickandmorty.png';

export const CharacterSection = () => {
    return (
        <CharacterSectionStyles>
            <Container>
                <div className='character-section--left'>
                    <img className='character-section__image' src={DragonBallZ} alt="" />
                    <img className='character-section__image' src={Pokemon} alt="" />
                    <img className='character-section__image' src={SaintSeiya} alt="" />
                    <img className='character-section__image' src={RickAndMorty} alt="" />
                </div>
                <div className='character-section--right'>
                    <Heading2 text='Find your peer and start an adventure' />
                    <Paragraph text='Try to open a box and get luck. You can get 2 free boxes when you register.' style={{ marginBottom: '3rem' }} />
                    <ButtonPrimary path="/boxes" text="Open a box" />
                </div>
            </Container>
        </CharacterSectionStyles>
    )
}
