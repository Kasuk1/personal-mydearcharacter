import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import { darkTheme, lightTheme } from 'styles/ThemeStyle';
import { Navbar } from 'components/layout/Navbar/Navbar';
import { Footer } from 'components/layout/Footer/Footer';
import { HomePage } from 'views/Home/HomePage/HomePage';
import { CharactersPage } from 'views/Characters/CharactersPage/CharactersPage';
import { CharacterDetail } from 'views/Characters/CharacterDetail/CharacterDetail';
import { CoinsPage } from 'views/Coins/CoinsPage/CoinsPage';
import { BoxesPage } from 'views/Boxes/BoxesPage/BoxesPage';
import { GamePage } from 'views/Game/GamePage';

import { AuthRouter } from './AuthRouter';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { selectDarkTheme } from 'features/layout/layout.slice';
import {
  selectUser,
  verifyToken,
} from 'features/authentication/authentication.slice';
import { useEffect } from 'react';

export const AppRouter: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector(selectDarkTheme);
  const { isLogged } = useAppSelector(selectUser);

  useEffect(() => {
    console.log('dispatching verify token');
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path='/auth/*'
            element={
              <PublicRoutes isLogged={isLogged}>
                <AuthRouter />
              </PublicRoutes>
            }
          />

          <Route
            path='/game'
            element={
              <PrivateRoutes isLogged={isLogged}>
                <GamePage />
              </PrivateRoutes>
            }
          />

          <Route path='/' element={<HomePage />}></Route>
          <Route path='characters' element={<CharactersPage />}></Route>
          <Route
            path='characters/:characterId'
            element={<CharacterDetail />}
          ></Route>
          <Route path='coins' element={<CoinsPage />}></Route>
          <Route path='boxes' element={<BoxesPage />}></Route>
          <Route path='*' element={<p>Not found</p>}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};
