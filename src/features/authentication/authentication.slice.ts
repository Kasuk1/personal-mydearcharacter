import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
  AuthenticationState,
  LoginFormState,
  RegisterFormState,
} from 'interfaces/store/AuthenticationState.interface';
import { MDCAPI } from 'services/Pokemon/MdcAPI';

export const register = createAsyncThunk(
  'authentication/register',
  (data: RegisterFormState) => MDCAPI.register(data)
);

export const login = createAsyncThunk(
  'authentication/login',
  (data: LoginFormState) => MDCAPI.login(data)
);

export const verifyToken = createAsyncThunk(
  'authentication/verifyToken',
  MDCAPI.renewToken
);

const initialState: AuthenticationState = {
  user: {
    isLogged: false,
  },
  registerForm: {
    nickname: 'Luhh',
    email: 'lucero@hotmail.com',
    password: '123456',
  },
  loginForm: {
    email: 'igor2008_11@hotmail.com',
    password: '123456',
  },
  authState: {
    loading: false,
    error: false,
    message: '',
  },
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthenticationForm(
      state,
      action: PayloadAction<{
        formName: 'loginForm' | 'registerForm';
        name: string;
        value: string;
      }>
    ) {
      switch (action.payload.formName) {
        case 'loginForm':
          state.loginForm = {
            ...state.loginForm,
            [action.payload.name]: action.payload.value,
          };
          break;
        case 'registerForm':
          state.registerForm = {
            ...state.registerForm,
            [action.payload.name]: action.payload.value,
          };
          break;
        default:
          break;
      }
    },
    logout(state) {
      window.localStorage.clear();
      state.user = initialState.user;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.authState.loading = true;
        state.authState.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authState.loading = false;
        state.authState.error = false;
        const { ok, user, token } = action.payload;
        console.log(action.payload);
        if (ok) {
          window.localStorage.setItem('token', token);
          state.user = {
            ...state.user,
            isLogged: true,
            ...user,
          };
          state.authState.message = 'Login successfully';
        } else {
          state.authState.message = 'Login failed';
        }
      })
      .addCase(login.rejected, (state) => {
        state.authState.loading = false;
        state.authState.error = true;
      })
      .addCase(register.pending, (state) => {
        state.authState.loading = true;
        state.authState.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.authState.loading = false;
        state.authState.error = false;
        const { ok, user, token } = action.payload;
        console.log(action.payload);
        if (ok) {
          window.localStorage.setItem('token', token);
          state.user = {
            ...state.user,
            isLogged: true,
            ...user,
          };
          state.authState.message = 'Register successfully';
        } else {
          state.authState.message = 'Register failed';
        }
      })
      .addCase(register.rejected, (state) => {
        state.authState.loading = false;
        state.authState.error = true;
      })
      .addCase(verifyToken.pending, (state) => {
        state.authState.loading = true;
        state.authState.error = false;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.authState.loading = false;
        state.authState.error = false;
        const { ok, user, token } = action.payload;
        if (ok) {
          window.localStorage.setItem('token', token);
          state.user = {
            ...state.user,
            isLogged: true,
            ...user,
          };
          state.authState.message = 'Authentication successfully';
        } else {
          state.authState.message = 'Authentication failed';
        }
      })
      .addCase(verifyToken.rejected, (state) => {
        state.authState.loading = false;
        state.authState.error = true;
      });
  },
});

export const { setAuthenticationForm, logout } = authenticationSlice.actions;

export const selectRegisterForm = (state: RootState) =>
  state.authentication.registerForm;
export const selectLoginForm = (state: RootState) =>
  state.authentication.loginForm;
export const selectUser = (state: RootState) => state.authentication.user;
export const selectAuthState = (state: RootState) =>
  state.authentication.authState;

export default authenticationSlice.reducer;
