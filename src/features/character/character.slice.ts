import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PokeAPI } from '../../services/PokeAPI';
import { RootState } from '../../app/store';
import { CharacterState } from '../../interfaces';

export const getCharacterDetail = createAsyncThunk(
  'character/getCharacterDetail',
  (characterId: string) => PokeAPI.getCharacterDetail(characterId)
);

const initialState: CharacterState = {
  character: null,
  getCharacterDetailLoading: false,
  getCharacterDetailError: false,
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacterDetail.pending, (state) => {
        state.getCharacterDetailLoading = true;
        state.getCharacterDetailError = false;
      })
      .addCase(getCharacterDetail.fulfilled, (state, action) => {
        state.getCharacterDetailLoading = false;
        state.getCharacterDetailError = false;
        console.log(action.payload);
        state.character = action.payload;
      })
      .addCase(getCharacterDetail.rejected, (state) => {
        state.getCharacterDetailLoading = false;
        state.getCharacterDetailError = true;
      });
  },
});

export const selectCharacter = (state: RootState) => state.character.character;
export const selectGetCharacterDetailLoading = (state: RootState) =>
  state.character.getCharacterDetailLoading;
export const selectGetCharacterDetailError = (state: RootState) =>
  state.character.getCharacterDetailError;

export default characterSlice.reducer;
