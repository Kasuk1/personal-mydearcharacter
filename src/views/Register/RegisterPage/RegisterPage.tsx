import { useAppDispatch, useAppSelector } from "app/hooks";
import { Container, Heading2, ButtonSubmit, Paragraph } from "components";

import {
  register,
  selectRegisterForm,
  setAuthenticationForm,
} from "features/authentication/authentication.slice";
import { rickAndMortyPortal } from "assets";
import RegisterStyles from "./RegisterPage.styles";

export const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const { nickname, email, password } = useAppSelector(selectRegisterForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setAuthenticationForm({
        formName: "registerForm",
        name: e.target.name,
        value: e.target.value,
      })
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register({ nickname, email, password }));
  };

  return (
    <RegisterStyles className="min-height-85">
      <Container>
        <div className="register-page__left">
          <img src={rickAndMortyPortal} alt="" />
        </div>
        <div className="register-page__right">
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-form__header">
              <Heading2>Register</Heading2>
              <Paragraph>
                Complete all the fields below to register successfully.
              </Paragraph>
            </div>

            <input
              className="register-form__input"
              type="text"
              name="nickname"
              value={nickname}
              placeholder="Nickname"
              onChange={handleChange}
            />
            <input
              className="register-form__input"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              className="register-form__input"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
            <ButtonSubmit text="Register now!" />
          </form>
        </div>
      </Container>
    </RegisterStyles>
  );
};
