import { useAppSelector } from "app/hooks";
import { Footer, Navbar } from "components";
import { selectDarkTheme } from "features";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isDarkTheme = useAppSelector(selectDarkTheme);

  const backgroundStyle = isDarkTheme
    ? "linear-gradient(90deg, hsla(0, 0%, 0%, 1) 0%,hsla(219, 92%, 5%, 1) 100%)"
    : "linear-gradient(90deg, hsla(0, 0%, 72%, 1) 0%, hsla(216, 52%, 94%, 1) 100%)";

  return (
    <main style={{ background: backgroundStyle }}>
      <header>
        <Navbar />
      </header>

      {children}

      <Footer />
    </main>
  );
};
