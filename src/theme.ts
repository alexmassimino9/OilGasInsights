import { useEffect, createContext, useState, useMemo } from "react";
import { createTheme, ThemeOptions } from "@mui/material/styles";

type Mode = "dark" | "light";

// Color design tokens
export const tokens = (mode: Mode) => ({
  ...(mode === "dark"
    ? {
        // dark green
        mirage: {
          100: "#040708",
          200: "#080e10",
          300: "#0d1618",
          400: "#111d20",
          500: "#152428",
          600: "#445053",
          700: "#737c7e",
          800: "#a1a7a9",
          900: "#d0d3d4",
        },
        // accent color
        tasman: {
          100: "#2a2d29",
          200: "#535952",
          300: "#7d867c",
          400: "#a6b2a5",
          500: "#d0dfce",
          600: "#d9e5d8",
          700: "#e3ece2",
          800: "#ecf2eb",
          900: "#f6f9f5",
        },
        // primary color
        green: {
          100: "#18220f",
          200: "#30451e",
          300: "#48672e",
          400: "#608a3d",
          500: "#78ac4c",
          600: "#93bd70",
          700: "#aecd94",
          800: "#c9deb7",
          900: "#e4eedb",
        },
        grey: {
          100: "#181c1e",
          200: "#2f373c",
          300: "#47535a",
          400: "#5e6e78",
          500: "#768a96",
          600: "#91a1ab",
          700: "#adb9c0",
          800: "#c8d0d5",
          900: "#e4e8ea",
        },
        //comp color
        purple: {
          100: "#e5d2ec",
          200: "#caa5da",
          300: "#b079c7",
          400: "#954cb5",
          500: "#7b1fa2",
          600: "#621982",
          700: "#4a1361",
          800: "#310c41",
          900: "#190620",
        },
      }
    : // else light mode
      {
        mirage: {
          100: "#d0d3d4",
          200: "#a1a7a9",
          300: "#737c7e",
          400: "#445053",
          500: "#152428",
          600: "#111d20",
          700: "#0d1618",
          800: "#080e10",
          900: "#040708",
        },
        tasman: {
          100: "#f6f9f5",
          200: "#ecf2eb",
          300: "#e3ece2",
          400: "#d9e5d8",
          500: "#d0dfce",
          600: "#a6b2a5",
          700: "#7d867c",
          800: "#535952",
          900: "#2a2d29",
        },
        green: {
          100: "#e4eedb",
          200: "#c9deb7",
          300: "#aecd94",
          400: "#93bd70",
          500: "#78ac4c",
          600: "#608a3d",
          700: "#48672e",
          800: "#30451e",
          900: "#18220f",
        },
        grey: {
          100: "#e4e8ea",
          200: "#c8d0d5",
          300: "#adb9c0",
          400: "#91a1ab",
          500: "#768a96",
          600: "#5e6e78",
          700: "#47535a",
          800: "#2f373c",
          900: "#181c1e",
        },
        purple: {
          100: "#190620",
          200: "#310c41",
          300: "#4a1361",
          400: "#621982",
          500: "#7b1fa2",
          600: "#954cb5",
          700: "#b079c7",
          800: "#caa5da",
          900: "#e5d2ec",
        },
      }),
});

// MUI theme settings
export const themeSettings = (mode: Mode): ThemeOptions => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.green[500],
            },
            secondary: {
              main: colors.tasman[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.mirage[500],
            },
          }
        : {
            primary: {
              main: colors.mirage[100],
            },
            secondary: {
              main: colors.green[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Lato", "Helvetica Neue", "Helvetica", "Arial"].join(", "),
      fontSize: 12,
      h1: {
        fontFamily: ["Lato", "Helvetica Neue", "Helvetica", "Arial"].join(", "),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Lato", "Helvetica Neue", "Helvetica", "Arial"].join(", "),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Lato", "Helvetica Neue", "Helvetica", "Arial"].join(", "),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Lato", "Helvetica Neue", "Helvetica", "Arial"].join(", "),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Lato", "Helvetica Neue", "Helvetica", "Arial"].join(", "),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Lato", "Helvetica Neue", "Helvetica", "Arial"].join(", "),
        fontSize: 14,
      },
    },
  };
};

// Context for color mode
export const ColorModeContext = createContext<{
  toggleColorMode: () => void;
}>({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState<Mode>(
    () => (localStorage.getItem("themeMode") as Mode) || "dark",
  );

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode] as const;
};
