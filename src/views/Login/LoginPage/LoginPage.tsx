import { useAppDispatch, useAppSelector } from "app/hooks";
import { rickAndMortyNoPortal } from "assets";
import { ButtonSubmit, Container, Heading2, Paragraph } from "components";

import {
  login,
  selectLoginForm,
  setAuthenticationForm,
} from "features/authentication/authentication.slice";
import LoginStyles from "./LoginPage.styles";

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector(selectLoginForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setAuthenticationForm({
        formName: "loginForm",
        name: e.target.name,
        value: e.target.value,
      })
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <LoginStyles className="min-height-85">
      <Container>
        <div className="login-page__left">
          <img src={rickAndMortyNoPortal} alt="" />
        </div>
        <div className="login-page__right">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form__header">
              <Heading2>Login</Heading2>
              <Paragraph>
                Complete all the fields below to login successfully.
              </Paragraph>
            </div>

            <input
              className="login-form__input"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              className="login-form__input"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
            <ButtonSubmit text="Login now!" />
          </form>
        </div>
      </Container>
    </LoginStyles>
  );
};
