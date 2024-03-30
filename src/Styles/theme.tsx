import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const theme = createTheme({
  palette: {
    primary: {
      light: "#dbdbdb",
      main: "#333333",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FCE476",
      main: "#F6D68C",
      dark: "#EEA705",
      contrastText: "#fff",
    },
    accent: {
      main: "#336094",
      contrastText: "#fff",
    },
  },
  typography: {
    h3: {
      fontWeight: 600,
      color: "#2F2D2D",
      lineHeight: "30px",
      fontSize: 24,
      "@media (min-width:600px)": {
        lineHeight: "35px",
        fontSize: 27,
      },
    },
    h6: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#131515",
    },
    body1: {
      color: "#797979",
      fontWeight: 400,
      lineHeight: "25px",
      fontSize: 16,
      textAlign: "justify",
      "@media (min-width:600px)": {
        lineHeight: "30px",
        fontSize: 18,
      },
    },
    fontFamily: poppins.style.fontFamily,
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}
