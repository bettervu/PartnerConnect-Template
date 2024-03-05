// customize
// https://github.com/mui-org/material-ui/blob/master/src/styles/getMuiTheme.js
// http://www.material-ui.com/#/components
// https://material.io/icons/

import { blue, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export default createTheme({
  direction: 'ltr',
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      transparent: 'rgba(0, 0, 0, 0)',
      fullBlack: 'rgba(0, 0, 0, 1)',
      darkBlack: 'rgba(0, 0, 0, 0.87)',
      lightBlack: 'rgba(0, 0, 0, 0.54)',
      minBlack: 'rgba(0, 0, 0, 0.26)',
      faintBlack: 'rgba(0, 0, 0, 0.12)',
      fullWhite: 'rgba(255, 255, 255, 1)',
      darkWhite: 'rgba(255, 255, 255, 0.87)',
      lightWhite: 'rgba(255, 255, 255, 0.54)',
      red: '#ea254a',
      charcoal: '#484949'
    },
    type: 'light',
    primary: blue,
    secondary: grey,
    error: {
      50: '#ffebee',
      100: '#ffcdd2',
      200: '#ef9a9a',
      300: '#e57373',
      400: '#ef5350',
      500: '#f44336',
      600: '#e53935',
      700: '#d32f2f',
      800: '#c62828',
      900: '#b71c1c',
      A100: '#ff8a80',
      A200: '#ff5252',
      A400: '#ff1744',
      A700: '#d50000',
      contrastDefaultColor: 'light'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
      contrastDefaultColor: 'dark'
    },
    shades: {
      dark: {
        text: {
          primary: 'rgba(255, 255, 255, 1)',
          secondary: 'rgba(255, 255, 255, 0.7)',
          disabled: 'rgba(255, 255, 255, 0.5)',
          hint: 'rgba(255, 255, 255, 0.5)',
          icon: 'rgba(255, 255, 255, 0.5)',
          divider: 'rgba(255, 255, 255, 0.12)',
          lightDivider: 'rgba(255, 255, 255, 0.075)'
        },
        input: {
          bottomLine: 'rgba(255, 255, 255, 0.7)',
          helperText: 'rgba(255, 255, 255, 0.7)',
          labelText: 'rgba(255, 255, 255, 0.7)',
          inputText: 'rgba(255, 255, 255, 1)',
          disabled: 'rgba(255, 255, 255, 0.5)'
        },
        action: {
          active: 'rgba(255, 255, 255, 1)',
          disabled: 'rgba(255, 255, 255, 0.3)'
        },
        background: {
          default: '#303030',
          paper: '#424242',
          appBar: '#ffffff',
          contentFrame: '#212121',
          chip: '#424242'
        },
        line: {
          stepper: '#bdbdbd'
        }
      },
      light: {
        text: {
          primary: 'rgba(0, 0, 0, 0.87)',
          secondary: 'rgba(0, 0, 0, 0.54)',
          disabled: 'rgba(0, 0, 0, 0.38)',
          hint: 'rgba(0, 0, 0, 0.38)',
          icon: 'rgba(0, 0, 0, 0.38)',
          divider: 'rgba(0, 0, 0, 0.12)',
          lightDivider: 'rgba(0, 0, 0, 0.075)'
        },
        input: {
          bottomLine: 'rgba(0, 0, 0, 0.42)',
          helperText: 'rgba(0, 0, 0, 0.54)',
          labelText: 'rgba(0, 0, 0, 0.54)',
          inputText: 'rgba(0, 0, 0, 0.87)',
          disabled: 'rgba(0, 0, 0, 0.42)'
        },
        action: {
          active: 'rgba(0, 0, 0, 0.54)',
          disabled: 'rgba(0, 0, 0, 0.26)'
        },
        background: {
          default: '#fafafa',
          paper: '#fff',
          appBar: '#fff',
          contentFrame: '#eeeeee',
          chip: '#e0e0e0'
        },
        line: {
          stepper: '#bdbdbd'
        }
      }
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      icon: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
      lightDivider: 'rgba(0, 0, 0, 0.075)'
    },
    input: {
      bottomLine: 'rgba(0, 0, 0, 0.42)',
      helperText: 'rgba(0, 0, 0, 0.54)',
      labelText: 'rgba(0, 0, 0, 0.54)',
      inputText: 'rgba(0, 0, 0, 0.87)',
      disabled: 'rgba(0, 0, 0, 0.42)'
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.26)'
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
      appBar: '#fff',
      contentFrame: '#eeeeee',
      chip: '#e0e0e0'
    },
    line: {
      stepper: '#bdbdbd'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Biotif", "-apple-system", "BlinkMacSystemFont", "Open Sans", sans-serif',
    fontSize: 12,
    htmlFontSize: 10,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontSize: '2rem',
      lineHeight: '2.5rem',
      fontWeight: 900,
      fontFamily: '"Biotif", "-apple-system", "BlinkMacSystemFont", "Open Sans", sans-serif',
      letterSpacing: '1px',
      color: '#25282a'
    },
    h2: {
      fontSize: '1.6rem',
      lineHeight: '2.3rem',
      fontWeight: 900,
      fontFamily: '"Biotif", "-apple-system", "BlinkMacSystemFont", "Open Sans", sans-serif',
      letterSpacing: '1px',
      color: '#25282a'
    },
    h3: {
      fontSize: '1.4rem',
      lineHeight: '1.9rem',
      fontWeight: 400,
      fontFamily: '"Biotif", "-apple-system", "BlinkMacSystemFont", "Open Sans", sans-serif',
      letterSpacing: '1px',
      color: '#25282a'
    },
    h4: {
      fontSize: '1.4rem',
      fontWeight: 400,
      fontFamily: '"Biotif", "-apple-system", "BlinkMacSystemFont", "Open Sans", sans-serif',
      letterSpacing: '1px',
      color: '#25282a'
    },
    h5: {
      fontSize: '1.7rem',
      fontWeight: 200,
      fontStyle: 'italic',
      fontFamily: '"Pensum Pro", "-apple-system", "BlinkMacSystemFont", "Open Sans", sans-serif',
      letterSpacing: '1px',
      color: '#25282a'
    },
    h6: {
      fontSize: '1.4rem',
      fontWeight: 400,
      fontFamily: '"Biotif", "-apple-system", "BlinkMacSystemFont", "Open Sans", sans-serif',
      letterSpacing: '1px',
      color: '#25282a'
    },
    button: {
      fontSize: '1.5rem',
      // letterSpacing: '3px',
      textTransform: 'uppercase',
      fontWeight: 500,
      fontFamily: '"Biotif", "-apple-system", "BlinkMacSystemFont", "Open Sans", sans-serif'
    }
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 48
      },
      '@media (min-width:600px)': {
        minHeight: 64
      }
    }
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  shadows: [
    'none',
    '0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    '0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)',
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
    '0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
    '0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    '0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
    '0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
    '0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
    '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
    '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)',
    '0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)',
    '0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
    '0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
    '0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)',
    '0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)',
    '0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)',
    '0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)',
    '0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)',
    '0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)'
  ],
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  spacing: 8,
  zIndex: {
    mobileStepper: 900,
    menu: 1000,
    appBar: 1100,
    drawerOverlay: 1200,
    navDrawer: 1300,
    dialogOverlay: 1400,
    dialog: 1500,
    layer: 2000,
    popover: 2100,
    snackbar: 2900,
    tooltip: 3000
  },
  classes: {
    components: {
      tooltip: {
        validationTooltip: {
          backgroundColor: 'red'
        }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: '0.875rem',
          lineHeight: 1.43,
          letterSpacing: '0.01071em'
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {}
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: '44px !important'
        },
        footer: {
          borderBottom: 'none'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '1.3rem !important',
          verticalAlign: 'middle',
          borderBottom: 'solid 1px rgba(0,0,0,0.05)'
        },
        head: {
          color: '#909295'
        }
      }
    },
    MuiExpansionPanelSummary: {
      styleOverrides: {
        root: {
          userSelect: 'auto',
          '&:hover': {
            backgroundColor: '#f7f7f7'
          }
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#f7f7f7'
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          userSelect: 'auto',
          '&:hover': {
            backgroundColor: '#f7f7f7'
          }
        }
      }
    },
    MuiAccordionDetailsRoot: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiSnackbarContent: {
      styleOverrides: {
        message: {
          fontSize: '1.5rem'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
          fontWeight: '500',
          lineHeight: '2rem',
          letterSpacing: '1px',
          '&:hover': {
            backgroundColor: '#f7f7f7'
          }
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#4197D6'
          }
        },
        outlinedPrimary: {
          border: '1px solid #D8D8D8',
          '&:hover': {
            backgroundColor: 'rgba(0,144,218,.04)',
            border: '1px solid #D8D8D8'
          }
        },
        textPrimary: {
          '&:hover': {
            backgroundColor: 'rgba(0,144,218,.04)'
          }
        },
        sizeLarge: {
          fontSize: '1.5rem',
          padding: '15px 24px'
        },
        sizeSmall: {
          fontSize: '1.11rem'
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          marginBottom: 1
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: 'yellow'
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#ebebeb'
          }
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 12,
          backgroundColor: '#eeeeee',
          borderRadius: 5
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '2rem'
        }
      }
    }
  }
});
