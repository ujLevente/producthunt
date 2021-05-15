import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#4b4c6d' },
    secondary: { main: '#797979' },
  },
}); // locale a vbégére hu-HU

export default responsiveFontSizes(theme);
