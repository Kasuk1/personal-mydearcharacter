import { configureStore } from '@reduxjs/toolkit';
import layoutSlice from '../features/layout/layout.slice';
import charactersSlice from '../features/characters/characters.slice';
import characterSlice from '../features/character/character.slice';

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    characters: charactersSlice,
    character: characterSlice
  },
});
