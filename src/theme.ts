import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#005A7D', // Tamno plava - profesionalna i moderna
      light: '#007BA8',
      dark: '#003D54',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF6B6B', // Koralno narandžasta - CTA dugmad
      light: '#FF8A8A',
      dark: '#FF5252', // Hover efekat
      contrastText: '#ffffff',
    },
    info: {
      main: '#00BCD4', // Svetlo tirkizna - akcent elementi
      light: '#33C9DC',
      dark: '#008BA3',
      contrastText: '#ffffff',
    },
    background: {
      default: '#FFFFFF', // Bela - minimalistička i čista
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50', // Tamno siva za naslove
      secondary: '#34495E', // Srednje siva za paragrafe
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 4px 8px rgba(0,0,0,0.12)',
    '0px 6px 12px rgba(0,0,0,0.15)',
    '0px 8px 16px rgba(0,0,0,0.18)',
    '0px 10px 20px rgba(0,0,0,0.20)',
    '0px 12px 24px rgba(0,0,0,0.22)',
    '0px 14px 28px rgba(0,0,0,0.24)',
    '0px 16px 32px rgba(0,0,0,0.26)',
    '0px 18px 36px rgba(0,0,0,0.28)',
    '0px 20px 40px rgba(0,0,0,0.30)',
    '0px 22px 44px rgba(0,0,0,0.32)',
    '0px 24px 48px rgba(0,0,0,0.34)',
    '0px 26px 52px rgba(0,0,0,0.36)',
    '0px 28px 56px rgba(0,0,0,0.38)',
    '0px 30px 60px rgba(0,0,0,0.40)',
    '0px 32px 64px rgba(0,0,0,0.42)',
    '0px 34px 68px rgba(0,0,0,0.44)',
    '0px 36px 72px rgba(0,0,0,0.46)',
    '0px 38px 76px rgba(0,0,0,0.48)',
    '0px 40px 80px rgba(0,0,0,0.50)',
    '0px 42px 84px rgba(0,0,0,0.52)',
    '0px 44px 88px rgba(0,0,0,0.54)',
    '0px 46px 92px rgba(0,0,0,0.56)',
    '0px 48px 96px rgba(0,0,0,0.58)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontWeight: 600,
        },
        contained: {
          boxShadow: '0px 4px 12px rgba(255, 107, 107, 0.3)',
          '&:hover': {
            boxShadow: '0px 6px 16px rgba(255, 107, 107, 0.4)',
            backgroundColor: '#FF5252', // Hover efekat za CTA dugmad
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            backgroundColor: 'rgba(0, 90, 125, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
          '&:hover': {
            boxShadow: '0px 6px 20px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
        colorPrimary: {
          backgroundColor: '#005A7D',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#003D54',
          },
        },
      },
    },
  },
});

export default theme;
