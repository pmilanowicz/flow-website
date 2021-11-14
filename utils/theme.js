import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';

const theme = createTheme({
    spacing: 8,
    palette: {
        primary: {
            main: '#1e3356',
        },
        secondary: {
            main: '#ffffff',
        },
    },
});

export default function Theme(props) {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
}