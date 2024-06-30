const themeShared = { margins: { s: 4, m: 8, l: 16, xl: 24 } };

export const lightTheme = {
  colors: { typography: "#000000", error: "red", background: "#ffffff" },
  ...themeShared,
} as const;

export const darkTheme = {
  colors: { typography: "#ffffff", error: "red", background: "#000000" },
  ...themeShared,
} as const;
