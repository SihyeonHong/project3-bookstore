import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { ThemeSwitcher } from "./components/header/ThemeSwitcher";
import { BookStoreThemeProvider } from "./context/themeContext";

export const App = () => {
  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher />
      <Layout children={<Home />} />
    </BookStoreThemeProvider>
  );
};
