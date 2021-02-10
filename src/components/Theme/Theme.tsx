import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

// theme
const lightTheme: DefaultTheme = {
  borderRadius: "4px",
  palette: {
    common: {
      black: "17, 17, 17",
      white: "252, 247, 248",
      grey: {
        100: "247, 250, 252",
        200: "237, 242, 247",
        300: "226, 232, 240",
        400: "203, 213, 224",
        500: "160, 174, 191",
        600: "114, 128, 149",
        700: "74, 85, 103",
        800: "45, 55, 71",
        900: "26, 32, 44"
      },
      confirm: "69, 158, 91",
      warning: "252, 141, 3",
      danger: "216, 54, 49"
    },
    primary: {
      main: "139, 62, 158",
      contrastText: "239, 244, 249"
    },
    secondary: {
      main: "23, 172, 193",
      contrastText: "55, 61, 64"
    }
  },
  font: {
    family: {
      sans: "'Ubuntu', sans-serif",
      serif: "'Times New Roman', serif",
      monospace: "'Ubuntu Mono', monospace"
    },
    size: {
      xs: ".75rem",
      sm: ".85rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      header: {
        xs: "1rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem"
      }
    }
  },
  shadow: {
    main: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    hover: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)"
  }
};

interface Props {
  children: React.ReactNode;
}

const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default Theme;
