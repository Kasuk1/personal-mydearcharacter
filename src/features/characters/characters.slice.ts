import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { PokeAPI } from '../../services/PokeAPI';
import { CharactersState } from '../../interfaces';

export const getCharacters = createAsyncThunk(
  'characters/getCharacters',
  (nextPrev: string) => PokeAPI.getCharacters(nextPrev)
);

const initialState: CharactersState = {
  next: '',
  previous: '',
  characters: [],
  getCharactersLoading: false,
  getCharactersError: false,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.getCharactersLoading = true;
        state.getCharactersError = false;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.getCharactersLoading = false;
        state.getCharactersError = false;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.characters = [
          ...state.characters,
          ...(action.payload.charactersWithDetail || []),
        ];
      })
      .addCase(getCharacters.rejected, (state) => {
        state.getCharactersLoading = false;
        state.getCharactersError = true;
      });
  },
});

export const selectCharacters = (state: RootState) =>
  state.characters.characters;
export const selectNextCharacters = (state: RootState) => state.characters.next;
export const selectPrevCharacters = (state: RootState) =>
  state.characters.previous;
export const selectGetCharactersLoading = (state: RootState) =>
  state.characters.getCharactersLoading;
export const selectGetCharactersError = (state: RootState) =>
  state.characters.getCharactersError;

export default charactersSlice.reducer;
