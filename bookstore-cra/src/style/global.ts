import { createGlobalStyle } from "styled-components";
import "sanitize.css";
import { ThemeName } from "./theme";

interface Props {
  themeName: ThemeName;
}

// 왜 prettier 적용 안 됨?
export const GlobalStyle = createGlobalStyle<Props>`
    body{
        margin: 0;
        padding: 0;
    }
    h1{
        margin: 0;
    }

    *{
        color: ${({ themeName }) => (themeName === "light" ? "black" : "white")}
    }
`;
