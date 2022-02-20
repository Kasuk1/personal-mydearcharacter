import {
  LoginFormState,
  RegisterFormState,
} from 'interfaces/store/AuthenticationState.interface';

const MDCURL = process.env.REACT_APP_API_URL;

export const MDCAPI = {
  async register(data: RegisterFormState) {
    const response = await fetch(`${MDCURL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  },

  async login(data: LoginFormState) {
    const response = await fetch(`${MDCURL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  },

  async renewToken() {
    const token = window.localStorage.getItem('token') || '';
    const response = await fetch(`${MDCURL}/users/renew-token`, {
      headers: {
        'x-token': token,
      },
    });
    const json = await response.json();
    return json;
  },
};
