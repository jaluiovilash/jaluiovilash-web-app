import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0D0D0D',
        },
        secondary: {
            main: '#ffffff',
        },
        text: {
            primary: '#ffffff',
            secondary: '#FF3422',
        },
        action: {
            hover: '#FF3422',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

export default theme;
