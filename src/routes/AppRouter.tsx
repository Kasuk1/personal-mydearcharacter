import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  BoxesPage,
  CharactersPage,
  CharacterDetail,
  CoinsPage,
  HomePage,
  ProfilePage,
} from "views";

import { AuthRouter } from "./AuthRouter";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { GameRouter } from "./GameRouter";
import { selectUser, verifyToken } from "features";

export const AppRouter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLogged } = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
          <PublicRoutes isLogged={isLogged}>
            <AuthRouter />
          </PublicRoutes>
        }
      />

      <Route
        path="/game/*"
        element={
          <PrivateRoutes isLogged={isLogged}>
            <GameRouter />
          </PrivateRoutes>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoutes isLogged={isLogged}>
            <ProfilePage />
          </PrivateRoutes>
        }
      />

      <Route path="/" element={<HomePage />} />
      <Route path="characters" element={<CharactersPage />} />
      <Route path="characters/:characterId" element={<CharacterDetail />} />
      <Route path="coins" element={<CoinsPage />} />
      <Route path="boxes" element={<BoxesPage />} />
      <Route path="*" element={<p>Not found</p>} />
    </Routes>
  );
};
