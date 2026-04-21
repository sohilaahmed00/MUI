import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#547A95', 
      light: '#7B9CB6',
      dark: '#3A5A72',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#C2A56D', 
      light: '#D3BC91',
      dark: '#A68953',
      contrastText: '#1a1a1a',
    },
    background: {
      default: '#2C3947', 
      paper: '#334252', 
    },
    text: {
      primary: '#E8EDF2',
      secondary: '#A5B5C4',
    },
    divider: 'rgba(232, 237, 242, 0.12)',
    action: {
      hover: 'rgba(84, 122, 149, 0.15)',
      selected: 'rgba(84, 122, 149, 0.25)',
    }
  },
  typography: {
    fontFamily: '"Outfit", "Inter", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1 },
    h2: { fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2 },
    h3: { fontWeight: 700, letterSpacing: '-0.02em' },
    h4: { fontWeight: 700, letterSpacing: '-0.01em' },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' },
    button: {
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.6 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          transition: 'all 0.3s ease',
        },
        sizeLarge: {
          padding: '12px 28px',
          fontSize: '1.1rem',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #7B9CB6 0%, #547A95 100%)',
          boxShadow: '0 8px 20px rgba(84, 122, 149, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          '&:hover': {
            boxShadow: '0 12px 28px rgba(84, 122, 149, 0.5)',
            background: 'linear-gradient(135deg, #8AA9C2 0%, #7B9CB6 100%)',
            transform: 'translateY(-2px)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #D3BC91 0%, #C2A56D 100%)',
          color: '#1a1a1a',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 20px rgba(194, 165, 109, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #DFCBA9 0%, #D3BC91 100%)',
            boxShadow: '0 12px 28px rgba(194, 165, 109, 0.5)',
            transform: 'translateY(-2px)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(84, 122, 149, 0.5)',
          borderWidth: '2px',
          color: '#E8EDF2',
          '&:hover': {
            borderWidth: '2px',
            borderColor: '#7B9CB6',
            backgroundColor: 'rgba(84, 122, 149, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(51, 66, 82, 0.4)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(232, 237, 242, 0.05)',
          borderRadius: '24px',
          boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.4s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: 'rgba(194, 165, 109, 0.3)',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(232, 237, 242, 0.03)',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            '& fieldset': {
              borderColor: 'rgba(232, 237, 242, 0.1)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(232, 237, 242, 0.2)',
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(51, 66, 82, 0.5)',
              boxShadow: '0 0 0 4px rgba(84, 122, 149, 0.15)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#547A95',
              borderWidth: '1px',
            },
            '& input:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #334252 inset',
              WebkitTextFillColor: '#E8EDF2',
              borderRadius: 'inherit',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#A5B5C4',
            '&.Mui-focused': {
              color: '#547A95',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(44, 57, 71, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(232, 237, 242, 0.05)',
          boxShadow: 'none',
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 600,
        },
        filledSecondary: {
          backgroundColor: 'rgba(194, 165, 109, 0.1)',
          color: '#C2A56D',
          border: '1px solid rgba(194, 165, 109, 0.2)',
        }
      }
    }
  },
});

export default theme;