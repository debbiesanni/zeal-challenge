"use client";
import HomePage from "@/Components/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/Styles/theme";

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </main>
  );
}
