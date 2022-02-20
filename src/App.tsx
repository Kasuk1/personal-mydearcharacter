import { AppRouter } from './routes/AppRouter';

import GlobalStyle from './styles/GlobalStyle';

export const App = () => {
  return (
    <>
      <AppRouter />
      <GlobalStyle />
    </>
  );
};
