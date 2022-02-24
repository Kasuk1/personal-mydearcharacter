import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GameState } from 'interfaces/store/GameState.interface';
import { MDCAPI } from 'services/MdcAPI';
import { RootState } from '../../app/store';

export const getMatches = createAsyncThunk(
  'game/getMatches',
  MDCAPI.getMatches
);

export const getMatchesByUserId = createAsyncThunk(
  'game/getMatchesByUserId',
  (userId: string) => MDCAPI.getMatchesByUserId(userId)
);

const initialState: GameState = {
  getMatchesState: {
    loading: false,
    error: false,
    message: '',
  },
  getMatchesByUserIdState: {
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
      })

      /* Handle GetMachesById Method */
      .addCase(getMatchesByUserId.pending, (state) => {
        state.getMatchesByUserIdState.loading = true;
        state.getMatchesByUserIdState.error = false;
      })
      .addCase(getMatchesByUserId.fulfilled, (state, action) => {
        state.getMatchesByUserIdState.loading = false;
        state.getMatchesByUserIdState.error = false;
        const { ok, matches } = action.payload;
        if (ok) {
          state.userMatches = matches;
          state.getMatchesByUserIdState.message =
            'User matches successfully listed';
        } else {
          state.getMatchesByUserIdState.message = 'Error to list user matches';
        }
      })
      .addCase(getMatchesByUserId.rejected, (state) => {
        state.getMatchesByUserIdState.loading = false;
        state.getMatchesByUserIdState.error = true;
      });
  },
});

export const { setActiveMatch } = gameSlice.actions;

export const selectMatches = (state: RootState) => state.game.matches;
export const selectUserMatches = (state: RootState) => state.game.userMatches;
export const selectActiveMatch = (state: RootState) => state.game.activeMatch;
export const selectGetMatchesState = (state: RootState) =>
  state.game.getMatchesState;
export const selectGetMatchesByUserIdState = (state: RootState) =>
  state.game.getMatchesByUserIdState;

export default gameSlice.reducer;
