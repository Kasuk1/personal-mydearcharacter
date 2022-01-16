import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PublicRoutes } from './PublicRoutes';

import { darkTheme, lightTheme } from '../styles/ThemeStyle';
import { selectDarkTheme } from '../features/layout/layout.slice';
import { useAppSelector } from '../app/hooks';

export const AppRouter = () => {
    const isDarkTheme = useAppSelector(selectDarkTheme);

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
