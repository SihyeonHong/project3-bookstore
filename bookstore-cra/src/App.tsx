import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { light } from "./style/theme";
import { dark } from "./style/theme";

export const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle themeName="light" />
      <Layout children={<Home />} />
    </ThemeProvider>
  );
};
