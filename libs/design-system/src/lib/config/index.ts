const stdFonts = ['Helvetica', 'Arial', 'sans-serif'];

const amTheme = {
  palette: {
    primary: {
      main: '#800080',
    },
    text: {
      primary: '#000000DE',
      secondary: '#2C2C2C',
      gray: '#757575',
      black: '#000000',
      white: '#FFFFFF',
    },
    action: {
      active: '#2196F3',
      pending: '#F9B337',
    },
    icon: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
    footer: {
      background: '#FCF7F1',
    },
    paper: {
      background: {
        primary: '#FCF7F1',
        secondary: '#F7FBFF',
        complementary: '#FBF5F5',
      },
    },
  },
  typography: {
    body1: {
      color: '#2C2C2C',
    },
    body2: {
      color: '#2C2C2C',
    },
    button: {
      fontSize: '18px',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: stdFonts,
          padding: '10px 24px',
          borderRadius: '10px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: stdFonts,
          borderRadius: '10px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
      },
    },
    MUIDataTableBodyCell: {
      styleOverrides: {
        root: {
          fontFamily: stdFonts,
          paddingTop: '1rem',
          paddingBottom: '1rem',
        },
        stackedHeader: {
          fontSize: '1.25rem',
          fontWeight: 700,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: stdFonts,
        },
        h1: {
          fontFamily: stdFonts,
          fontWeight: 700,
        },
        h2: {
          fontFamily: stdFonts,
          fontWeight: 700,
        },
        h3: {
          fontFamily: stdFonts,
          fontWeight: 700,
        },
        h4: {
          fontFamily: stdFonts,
          fontWeight: 700,
        },
        h5: {
          fontFamily: stdFonts,
          fontWeight: 700,
        },
        h6: {
          fontFamily: stdFonts,
          fontWeight: 700,
        },
      },
    },
  },
};

const config = {
  amTheme,
};

export default config;
