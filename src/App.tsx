import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "app/hooks";

import { AppRouter } from "./routes/AppRouter";
import { MainLayout } from "components";
import { SocketProvider } from "context";
import { selectDarkTheme } from "features";

import GlobalStyle, { darkTheme, lightTheme } from "styles";

export const App = () => {
  const isDarkTheme = useAppSelector(selectDarkTheme);

  return (
    <SocketProvider>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <BrowserRouter>
          <MainLayout>
            <AppRouter />
          </MainLayout>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </SocketProvider>
  );
};
