import { ThunkMethodState } from './ThunkMethodState.interface';

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
    online?: boolean;
    isLogged: boolean;
  };
  loginForm: LoginFormState;
  registerForm: RegisterFormState;
  authState: ThunkMethodState;
}
