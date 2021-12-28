import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PokeAPI } from "../../services/Pokemon/PokeAPI";

export const getCharacters = createAsyncThunk(
    'characters/getCharacters',
    (nextPrev) => PokeAPI.getCharacters(nextPrev)
);

const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        next: '',
        previous: '',
        characters: [],
        getCharactersLoading: false,
        getCharactersError: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCharacters.pending, (state) => {
                state.getCharactersLoading = true;
                state.getCharactersError = false;
            })
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.getCharactersLoading = false;
                state.getCharactersError = false;
                console.log(action.payload)
                state.next = action.payload.next;
                state.previous = action.payload.previous;
                state.characters = [...state.characters, ...action.payload.charactersWithDetail];
            })
            .addCase(getCharacters.rejected, (state) => {
                state.getCharactersLoading = false;
                state.getCharactersError = true;
            })
    }
});


export const selectCharacters = (state) => state.characters.characters;
export const selectNextCharacters = (state) => state.characters.next;
export const selectPrevCharacters = (state) => state.characters.previous;
export const selectGetCharactersLoading = (state) => state.characters.getCharactersLoading;
export const selectGetCharactersError = (state) => state.characters.getCharactersError;

export default charactersSlice.reducer;
