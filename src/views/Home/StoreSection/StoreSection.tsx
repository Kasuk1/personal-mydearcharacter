import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import { CardDetail } from 'components/CharacterCard/CardDetail/CardDetail';
import { Heading2 } from 'components/Headings/Heading2/Heading2';
import { Paragraph } from 'components/Headings/Paragraph/Paragraph';
import { Container } from 'components/layout/Container/Container';

import {
  getRandomCharacters,
  selectGetRandomCharacters,
} from 'features/layout/layout.slice';

import StoreSectionStyles from './StoreSection.styles';

export const StoreSection = () => {
  const dispatch = useAppDispatch();
  const { randomCharacters } = useAppSelector(selectGetRandomCharacters);

  useEffect(() => {
    dispatch(getRandomCharacters());
  }, [dispatch]);

  return (
    <StoreSectionStyles>
      <Container>
        <div className='store-section--left'>
          <Heading2>Train and level up the power of your characters</Heading2>
          <Paragraph
            text='See and filter the characters that you could have.'
            style={{ marginBottom: '3rem' }}
          />
          <ButtonPrimary path='/characters' text='See characters' />
        </div>
        <div className='store-section--right'>
          {randomCharacters.map((character) => (
            <CardDetail key={character.id} {...character} />
          ))}
        </div>
      </Container>
    </StoreSectionStyles>
  );
};
