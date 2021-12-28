import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        darkTheme: true,
        showMenu: false,
        imageClicked: false,
    },
    reducers: {
        handleTheme(state) {
            state.darkTheme = !state.darkTheme;
        },
        handleShowMenu(state) {
            state.showMenu = !state.showMenu;
        },
        handleImageClick(state) {
            state.imageClicked = !state.imageClicked;
        }
    }
});

export const selectDarkTheme = (state) => state.layout.darkTheme;
export const selectShowMenu = (state) => state.layout.showMenu;
export const selectNavbarScroll = (state) => state.layout.navbarScroll;
export const selectImageClicked = (state) => state.layout.imageClicked;

export const { handleTheme, handleShowMenu, handleImageClick } = layoutSlice.actions;

export default layoutSlice.reducer;