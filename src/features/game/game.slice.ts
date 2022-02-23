import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from 'interfaces/store/GameState.interface';
import { MDCAPI } from 'services/MdcAPI';
import { RootState } from '../../app/store';

export const getMatches = createAsyncThunk(
  'game/getMatches',
  MDCAPI.getMatches
);

const initialState: GameState = {
  getMatchesState: {
    loading: false,
    error: false,
    message: '',
  },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setActiveMatch(state, action) {
      state.activeMatch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      /* Handle GetMaches Method */
      .addCase(getMatches.pending, (state) => {
        state.getMatchesState.loading = true;
        state.getMatchesState.error = false;
      })
      .addCase(getMatches.fulfilled, (state, action) => {
        state.getMatchesState.loading = false;
        state.getMatchesState.error = false;
        const { ok, matches } = action.payload;
        if (ok) {
          state.matches = matches;
          state.getMatchesState.message = 'Matches successfully listed';
        } else {
          state.getMatchesState.message = 'Error to list matches';
        }
      })
      .addCase(getMatches.rejected, (state) => {
        state.getMatchesState.loading = false;
        state.getMatchesState.error = true;
      });
  },
});

export const { setActiveMatch } = gameSlice.actions;

export const selectMatches = (state: RootState) => state.game.matches;
export const selectActiveMatch = (state: RootState) => state.game.activeMatch;
export const selectGetMatchesState = (state: RootState) =>
  state.game.getMatchesState;

export default gameSlice.reducer;
