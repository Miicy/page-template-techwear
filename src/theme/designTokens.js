import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main1: "#FFFFFF",
            main: grey[50],
            opacity80: "rgba(250, 250, 250, 0.85)",
            opacity95: "rgba(250, 250, 250, 0.95)",
          },
          secondary: {
            main: grey[100],
          },
          third: {
            main: grey[200],
          },
          forth: {
            main: grey[300],
          },
          fifth: {
            main: grey[400],
          },
          customRed: {
            main: red[400],
          },
          customOppositeLighter: {
            main: grey[500],
          },
          customOpposite: {
            main: grey[900],
          },
          divider: grey[400],
          text: {
            primary: grey[900],
            secondary: grey[700],
          },
        }
      : {
          primary: {
            main1: "#000000",
            main: grey[900],
            opacity80: "rgba(33, 33, 33, 0.85)",
            opacity95: "rgba(33, 33, 33, 0.95)",
          },
          secondary: {
            main: grey[800],
          },
          third: {
            main: grey[700],
          },
          forth: {
            main: grey[600],
          },
          fifth: {
            main: grey[700],
          },
          customRed: {
            main: red[400],
          },
          customOpposite: {
            main: grey[50],
          },
          customOppositeLighter: {
            main: grey[500],
          },
          divider: grey[400],
          text: {
            primary: grey[50],
            secondary: grey[400],
          },
        }),
  },
});

export const themeCreation = (mode) =>
  createTheme({
    ...getDesignTokens(mode),
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 20,
              fontSize: "0.85em",
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: mode === 'light' ? grey[900] : grey[50],
            color: mode === 'light' ?grey[50] : grey[900],
          },
        },
      },
      MuiSlider: {
        styleOverrides: {
          thumb: {
            backgroundColor: mode === 'light' ? grey[900] : grey[50],
          },
          track: {
            backgroundColor: mode === 'light' ? grey[700] : grey[200],
          },
          rail: {
            backgroundColor: mode === 'light' ? grey[900] : grey[100],
          },
        },
      },
    },
  });
