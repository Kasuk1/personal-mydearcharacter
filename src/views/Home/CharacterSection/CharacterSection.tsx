import CharacterSectionStyles from './CharacterSection.styles';

import { Container } from 'components/layout/Container/Container';
import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import { Heading2 } from 'components/Headings/Heading2/Heading2';
import { Paragraph } from 'components/Headings/Paragraph/Paragraph';

import { dragonBallZ } from 'assets';
import { pokemon } from 'assets';
import { saintSeiya } from 'assets';
import { rickAndMorty } from 'assets';

export const CharacterSection: React.FC = () => {
  return (
    <CharacterSectionStyles>
      <Container>
        <div className='character-section--left'>
          <img className='character-section__image' src={dragonBallZ} alt='' />
          <img className='character-section__image' src={pokemon} alt='' />
          <img className='character-section__image' src={saintSeiya} alt='' />
          <img className='character-section__image' src={rickAndMorty} alt='' />
        </div>
        <div className='character-section--right'>
          <Heading2 text='Find your peer and start an adventure' />
          <Paragraph
            text='Try to open a box and get luck. You can get 2 free boxes when you register.'
            style={{ marginBottom: '3rem' }}
          />
          <ButtonPrimary path='/boxes' text='Open a box' />
        </div>
      </Container>
    </CharacterSectionStyles>
  );
};
