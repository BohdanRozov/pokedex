const themeShared = { margins: { xs: 4, s: 8, m: 16, l: 24, xl: 32 } } as const;
const sharedColors = { white: "white", black: "black" } as const;

export const lightTheme = {
  colors: {
    typography: "#000000",
    error: "red",
    background: "#ffffff",
    ...sharedColors,
  },
  ...themeShared,
} as const;

export const darkTheme = {
  colors: {
    typography: "#ffffff",
    error: "red",
    background: "#000000",
    ...sharedColors,
  },
  ...themeShared,
} as const;
