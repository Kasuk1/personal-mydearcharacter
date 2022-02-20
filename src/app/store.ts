import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from 'features/layout/layout.slice';
import charactersReducer from 'features/characters/characters.slice';
import characterReducer from 'features/character/character.slice';
import authenticationReducer from 'features/authentication/authentication.slice';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    characters: charactersReducer,
    character: characterReducer,
    authentication: authenticationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
