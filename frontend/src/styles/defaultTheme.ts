import { colors, ThemeOptions } from "@mui/material";

const customColors = {
  primary: {
    main: "#389fff",
    dark: "#BC1616",
  },
};

export const defaultTheme: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1294,
      xl: 1440,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    button: {
      fontSize: "1rem",
      textTransform: "capitalize",
      fontWeight: 600,
    },
  },
  palette: {
    ...customColors,
    text: {
      primary: "#ffffff",
    },
    divider: colors.grey[200],
  },
  //   overrides: {
  //     MuiCssBaseline: {
  //       "@global": {
  //         ".not-working-button": {
  //           cursor: "not-allowed !important",
  //         },
  //       },
  //     },
  //     MuiButton: {
  //       root: {
  //         paddingLeft: 44,
  //         paddingRight: 44,
  //         borderRadius: 4,
  //       },
  //       contained: {
  //         paddingLeft: 44,
  //         paddingRight: 44,
  //         "&.Mui-disabled": {
  //           color: "#fff",
  //           backgroundColor: "rgba(242, 62, 62, 0.5)",
  //         },
  //       },
  //       outlined: {
  //         paddingLeft: 44,
  //         paddingRight: 44,
  //         borderColor: "#88909E",
  //         "&.Mui-disabled": {
  //           color: "#88909E",
  //           borderColor: "#D0D5D7",
  //         },
  //       },
  //     },
  //   },
};
