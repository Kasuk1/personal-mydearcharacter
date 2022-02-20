import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { ButtonPrimary } from 'components/Buttons/ButtonPrimary/ButtonPrimary';
import { Container } from 'components/layout/Container/Container';

import { bannerMewto } from 'assets';
import HeroSectionStyles from './HeroSection.styles';

export const HeroSection: React.FC = () => {
  return (
    <HeroSectionStyles>
      <Container>
        <div className='hero-section--left'>
          <h1 className='hero-section__title'>
            Collect and share your favorite characters
          </h1>
          <div className='hero-section__actions'>
            <ButtonPrimary path='/auth/register' text='Register' />
            <Link className='hero-section__span' to='/auth/login'>
              or login if you have an account{' '}
              <FontAwesomeIcon icon={faArrowRight} />{' '}
            </Link>
          </div>
        </div>
        <div className='hero-section--right'>
          <div className='hero-section__image'>
            <img src={bannerMewto} alt='' />
          </div>
        </div>
      </Container>
    </HeroSectionStyles>
  );
};
