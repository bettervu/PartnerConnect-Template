import { StyledEngineProvider, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import React from 'react';
import MuiTheme from '../mui-theme';

const withMuiTheme = Component => props => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={MuiTheme}>
        <Component {...props} />
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default withMuiTheme;
