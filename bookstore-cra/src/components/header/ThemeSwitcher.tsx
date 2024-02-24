import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

export const ThemeSwitcher = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>{themeName}</button>
    </div>
  );
};
