import { rickAndMortyNoPortal } from 'assets';
import { ButtonSubmit } from 'components/Buttons/ButtonSubmit/ButtonSubmit';
import { Heading2 } from 'components/Headings/Heading2/Heading2';
import { Paragraph } from 'components/Headings/Paragraph/Paragraph';
import { Container } from 'components/layout/Container/Container';
import LoginStyles from './LoginPage.styles';

export const LoginPage = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <LoginStyles>
      <Container>
        <div className='login-page__left'>
          <img src={rickAndMortyNoPortal} alt='' />
        </div>
        <div className='login-page__right'>
          <form className='login-form' onSubmit={onSubmit}>
            <div className='login-form__header'>
              <Heading2>Login</Heading2>
              <Paragraph>
                Complete all the fields below to login successfully.
              </Paragraph>
            </div>

            <input
              className='login-form__input'
              type='email'
              name='email'
              placeholder='Email'
            />
            <input
              className='login-form__input'
              type='password'
              name='password'
              placeholder='Password'
            />
            <ButtonSubmit text='Login now!' />
          </form>
        </div>
      </Container>
    </LoginStyles>
  );
};
