export interface LoginFormState {
  email: string;
  password: string;
}

export interface RegisterFormState {
  nickname: string;
  email: string;
  password: string;
}

export interface AuthenticationState {
  user: {
    uid?: string;
    nickname?: string;
    email?: string;
    isLogged: boolean;
  };
  loginForm: LoginFormState;
  registerForm: RegisterFormState;
}
