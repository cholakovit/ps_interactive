// Styled Elements
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: {
        black: string;
        fourth: string;
        third?: string;
        white?: string;
        iconColor?: string;
        main?: string;
        boxWidth?: string;
      };
    };
  }
  interface ThemeOptions {}

  interface Palette {}
  interface PaletteOptions {}

  interface PaletteColor {}

  interface SimplePaletteColorOptions {
    black?: string;
    fourth?: string;
    third?: string;
    white?: string;
    iconColor?: string;
  }
}
