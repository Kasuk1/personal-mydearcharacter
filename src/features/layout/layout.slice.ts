import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { PokeAPI } from "../../services/PokeAPI";
import { Pokemon } from "../../interfaces";

export const getRandomCharacters = createAsyncThunk(
  "layout/getRandomCharacters",
  PokeAPI.getRandomCharacters
);

// Define a type for the slice state
interface RandomCharacters {
  randomCharacters: Pokemon[];
  getRandomCharactersLoading: boolean;
  getRandomCharactersError: boolean;
}
interface LayoutState {
  darkTheme: boolean;
  showSmallMenu: boolean;
  imageClicked: boolean;
  getRandomCharacters: RandomCharacters;
  cardMatchSelected: boolean;
}

// Define the initial state using that type
const initialState: LayoutState = {
  darkTheme: true,
  showSmallMenu: false,
  imageClicked: false,
  getRandomCharacters: {
    randomCharacters: [],
    getRandomCharactersLoading: false,
    getRandomCharactersError: false,
  },
  cardMatchSelected: false,
};

const layoutSlice = createSlice({
  name: "layout",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
    handleShowMenu(state) {
      state.showSmallMenu = !state.showSmallMenu;
    },
    handleImageClick(state) {
      state.imageClicked = !state.imageClicked;
    },
    setCardMatchSelected(state, action) {
      state.cardMatchSelected = action.payload;
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
        state.getRandomCharacters.randomCharacters = action.payload;
      })
      .addCase(getRandomCharacters.rejected, (state) => {
        state.getRandomCharacters.getRandomCharactersLoading = false;
        state.getRandomCharacters.getRandomCharactersError = true;
      });
  },
});

export const selectDarkTheme = (state: RootState) => state.layout.darkTheme;
export const selectShowSmallMenu = (state: RootState) =>
  state.layout.showSmallMenu;
export const selectImageClicked = (state: RootState) =>
  state.layout.imageClicked;
export const selectGetRandomCharacters = (state: RootState) =>
  state.layout.getRandomCharacters;

export const selectCardMatchSelected = (state: RootState) =>
  state.layout.cardMatchSelected;

export const {
  handleTheme,
  handleShowMenu,
  handleImageClick,
  setCardMatchSelected,
} = layoutSlice.actions;

export default layoutSlice.reducer;
