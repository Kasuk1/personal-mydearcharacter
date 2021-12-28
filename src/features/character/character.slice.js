import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PokeAPI } from "../../services/Pokemon/PokeAPI";

export const getCharacterDetail = createAsyncThunk(
    'character/getCharacterDetail',
    (characterId) => PokeAPI.getCharacterDetail(characterId)
);

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        character: {},
        getCharacterDetailLoading: false,
        getCharacterDetailError: false
    },
    reducers: {

    },
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
            })
    }
});


export const selectCharacter = (state) => state.character.character;
export const selectGetCharacterDetailLoading = (state) => state.character.getCharacterDetailLoading;
export const selectGetCharacterDetailError = (state) => state.character.getCharacterDetailError;

export default characterSlice.reducer;
