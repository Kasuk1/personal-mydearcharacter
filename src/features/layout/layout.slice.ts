import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { PokeAPI } from '../../services/PokeAPI';
import { Pokemon } from '../../interfaces';

export const getRandomCharacters = createAsyncThunk(
  'layout/getRandomCharacters',
  PokeAPI.getRandomCharacters
);

// Define a type for the slice state
interface LayoutState {
  darkTheme: boolean;
  showMenu: boolean;
  imageClicked: boolean;
  getRandomCharacters: RandomCharacters;
}

interface RandomCharacters {
  randomCharacters: Pokemon[];
  getRandomCharactersLoading: boolean;
  getRandomCharactersError: boolean;
}

// Define the initial state using that type
const initialState: LayoutState = {
  darkTheme: true,
  showMenu: false,
  imageClicked: false,
  getRandomCharacters: {
    randomCharacters: [],
    getRandomCharactersLoading: false,
    getRandomCharactersError: false,
  },
};

const layoutSlice = createSlice({
  name: 'layout',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
    handleShowMenu(state) {
      state.showMenu = !state.showMenu;
    },
    handleImageClick(state) {
      state.imageClicked = !state.imageClicked;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRandomCharacters.pending, (state) => {
        state.getRandomCharacters.getRandomCharactersLoading = true;
        state.getRandomCharacters.getRandomCharactersError = false;
      })
      .addCase(getRandomCharacters.fulfilled, (state, action) => {
        state.getRandomCharacters.getRandomCharactersLoading = false;
        state.getRandomCharacters.getRandomCharactersError = false;
        console.log(action.payload);
        state.getRandomCharacters.randomCharacters = action.payload;
      })
      .addCase(getRandomCharacters.rejected, (state) => {
        state.getRandomCharacters.getRandomCharactersLoading = false;
        state.getRandomCharacters.getRandomCharactersError = true;
      });
  },
});

export const selectDarkTheme = (state: RootState) => state.layout.darkTheme;
export const selectShowMenu = (state: RootState) => state.layout.showMenu;
export const selectImageClicked = (state: RootState) =>
  state.layout.imageClicked;
export const selectGetRandomCharacters = (state: RootState) =>
  state.layout.getRandomCharacters;

export const { handleTheme, handleShowMenu, handleImageClick } =
  layoutSlice.actions;

export default layoutSlice.reducer;
