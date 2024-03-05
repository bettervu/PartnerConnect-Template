import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import classnames from 'classnames';
import EnrichmentComponent from 'components';
import React, { useState } from 'react';
import styles from './styles.styl';
import MuiTheme from './styles/mui-theme';

const App = () => {
  const [showBorderChecked, setShowBorderChecked] = useState(true);
  const toggleBorderChecked = () => {
    setShowBorderChecked(!showBorderChecked);
  };

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={MuiTheme}>
        <div className={styles.root}>
          <Typography variant="h4">Component Harness</Typography>

          <div className={styles.contentWrapper}>
            <FormGroup>
              <FormControlLabel
                control={<Switch size="small" checked={showBorderChecked} onChange={toggleBorderChecked} />}
                label="Show Border"
              />
            </FormGroup>
            <div
              className={classnames([
                styles.componentContainer,
                showBorderChecked ? styles.showBorder : styles.hideBorder
              ])}
            >
              <EnrichmentComponent previewMode={true} command={() => Promise.resolve({})} />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
