import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        darkTheme: true,
        showMenu: false
    },
    reducers: {
        handleTheme(state) {
            state.darkTheme = !state.darkTheme;
        },
        handleShowMenu(state) {
            state.showMenu = !state.showMenu;
        }
    }
});

export const selectDarkTheme = (state) => state.layout.darkTheme;
export const selectShowMenu = (state) => state.layout.showMenu;
export const selectNavbarScroll = (state) => state.layout.navbarScroll;

export const { handleTheme, handleShowMenu } = layoutSlice.actions;

export default layoutSlice.reducer;