// styled.d.ts
import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}
interface IHover {
  main: string;
  hover: string;
  transition?: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
        grey: {
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
          600: string;
          700: string;
          800: string;
          900: string;
        };
        confirm: string;
        danger: string;
        warning: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
    shadow: IHover;
    borderRadius: string;
    font: {
      family: {
        sans: string;
        serif: string;
        monospace: string;
      };
      size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        header: {
          xs: string;
          sm: string;
          md: string;
          lg: string;
          xl: string;
        };
      };
    };
  }
}
