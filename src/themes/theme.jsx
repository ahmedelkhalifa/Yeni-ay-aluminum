import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#FF6B00",
      light: "#FB923C",
      dark: "#E85D04",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#111827",
      contrastText: "#FFFFFF",
    },

    background: {
      default: "rgb(248, 249, 251)",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#071D32",
      secondary: "#5F6673",
    },

    divider: "#E5E7EB",

    grey: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "sans-serif",
    ].join(","),

    h1: {
      fontSize: "4rem",
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
    },

    h2: {
      fontSize: "3rem",
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: "-0.03em",
    },

    h3: {
      fontSize: "2.25rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },

    h4: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },

    h5: {
      fontSize: "1.375rem",
      fontWeight: 700,
    },

    h6: {
      fontSize: "1.125rem",
      fontWeight: 700,
    },

    button: {
      fontWeight: 500,
      textTransform: "none",
      letterSpacing: 0,
    },
  },

  shadows: [
    "none",
    "0 4px 20px rgba(17,24,39,0.04)",
    "0 6px 24px rgba(17,24,39,0.05)",
    "0 8px 30px rgba(17,24,39,0.06)",
    "0 10px 35px rgba(17,24,39,0.07)",
    ...Array(20).fill(
      "0 12px 40px rgba(17,24,39,0.08)"
    ),
  ],
});

export default theme;