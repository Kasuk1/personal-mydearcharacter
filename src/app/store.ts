import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from 'features/layout/layout.slice';
import charactersReducer from 'features/characters/characters.slice';
import characterReducer from 'features/character/character.slice';
import authenticationReducer from 'features/authentication/authentication.slice';
import gameReducer from 'features/game/game.slice';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    characters: charactersReducer,
    character: characterReducer,
    authentication: authenticationReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
