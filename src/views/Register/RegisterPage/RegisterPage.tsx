import { Container } from 'components/layout/Container/Container';
import { ButtonSubmit } from 'components/Buttons/ButtonSubmit/ButtonSubmit';
import { rickAndMortyPortal } from 'assets';
import RegisterStyles from './RegisterPage.styles';
import { Paragraph } from 'components/Headings/Paragraph/Paragraph';
import { Heading2 } from 'components/Headings/Heading2/Heading2';

export const RegisterPage = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <RegisterStyles>
      <Container>
        <div className='register-page__left'>
          <img src={rickAndMortyPortal} alt='' />
        </div>
        <div className='register-page__right'>
          <form className='register-form' onSubmit={onSubmit}>
            <div className='register-form__header'>
              <Heading2>Register</Heading2>
              <Paragraph>
                Complete all the fields below to register successfully.
              </Paragraph>
            </div>

            <input
              className='register-form__input'
              type='text'
              name='nickname'
              placeholder='Nickname'
            />
            <input
              className='register-form__input'
              type='email'
              name='email'
              placeholder='Email'
            />
            <input
              className='register-form__input'
              type='password'
              name='password'
              placeholder='Password'
            />
            <ButtonSubmit text='Register now!' />
          </form>
        </div>
      </Container>
    </RegisterStyles>
  );
};
