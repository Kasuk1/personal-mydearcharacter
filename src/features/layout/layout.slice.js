import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        darkTheme: true,
        showMenu: false,
        navbarScroll: false
    },
    reducers: {
        handleTheme(state) {
            state.darkTheme = !state.darkTheme;
        },
        handleShowMenu(state) {
            state.showMenu = !state.showMenu;
        },
        handleNavbarScroll(state, action) {
            state.navbarScroll = action.payload;
        }
    }
});

export const selectDarkTheme = (state) => state.layout.darkTheme;
export const selectShowMenu = (state) => state.layout.showMenu;
export const selectNavbarScroll = (state) => state.layout.navbarScroll;

export const { handleTheme, handleShowMenu, handleNavbarScroll } = layoutSlice.actions;

export default layoutSlice.reducer;