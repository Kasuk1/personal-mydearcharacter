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

export interface User {
  uid?: string;
  nickname?: string;
  email?: string;
  online?: boolean;
  level?: number;
  isLogged: boolean;
}

export interface AuthenticationState {
  user: User;
  loginForm: LoginFormState;
  registerForm: RegisterFormState;
  authState: ThunkMethodState;
}
