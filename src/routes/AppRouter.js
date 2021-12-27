import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PublicRoutes } from './PublicRoutes';

import { darkTheme, lightTheme } from '../styles/ThemeStyle';
import { selectDarkTheme } from '../features/layout/layout.slice';

export const AppRouter = () => {
    const isDarkTheme = useSelector(selectDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<PublicRoutes />}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}
