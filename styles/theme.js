const theme = {
  paletteType: 'light',
  paletteColors: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#000000',
      light: '#5e6b85',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: '#fff',
    },
    secondary: {
      light: '#6ec5ff',
      main: '#2195f2',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#000000',
    },
    // error: will use the default color
  },
};

export default theme;
