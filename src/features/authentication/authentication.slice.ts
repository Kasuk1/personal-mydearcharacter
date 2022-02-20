import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { AuthenticationState } from 'interfaces/store/AuthenticationState.interface';

const initialState: AuthenticationState = {
  user: {
    isLogged: false,
  },
  registerForm: {
    nickname: '',
    email: '',
    password: '',
  },
  loginForm: {
    email: '',
    password: '',
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
  },
  extraReducers: (builder) => {
    /*  builder.addCase(); */
  },
});

export const { setAuthenticationForm } = authenticationSlice.actions;

export const selectRegisterForm = (state: RootState) =>
  state.authentication.registerForm;
export const selectLoginForm = (state: RootState) =>
  state.authentication.loginForm;
export const selectUser = (state: RootState) => state.authentication.user;

export default authenticationSlice.reducer;
