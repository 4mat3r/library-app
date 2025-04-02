'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  // mimic tailwind breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px var(--autofill-bg-color, #fff9c4) inset", // Light yellow by default
            WebkitTextFillColor: "var(--autofill-text-color, #000)", // Black text by default
            transition: "background-color 5000s ease-in-out 0s", // Smooth transition
          },
        },
      },
    },
  },
});

export default theme;