// MRG Website Theme - colors, fonts, etc.
import { createMuiTheme } from "@material-ui/core/styles";
import { mrgColor, errorColor } from "./colors.js";

//orange is used for testing... since default primary is purple

export const mrgTheme = createMuiTheme({
  overrides: {
    // Style sheet name
    MuiButton: {
      // Name of the rule
      // component use example (component is imported from CustomButton):
      //<Button usetheme="contained">
      containedPrimary: {
        backgroundColor: `${mrgColor[500]} !important`,
        border: `1px solid ${mrgColor[500]} !important`,
        boxShadow: `0 2px 2px 0 ${mrgColor[500]}14, 0 3px 1px -2px ${mrgColor[500]}20, 0 1px 5px 0 ${mrgColor[500]}12 !important`,
        "&:hover,&:focus": {
          backgroundColor: `${mrgColor[500]} !important`,
          boxShadow: `0 14px 26px -12px ${mrgColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${mrgColor[500]}20 !important`,
        },
      },
      //<Button usetheme="outlined">
      outlinedPrimary: {
        color: `${mrgColor[500]} !important`,
        backgroundColor: `transparent !important`,
        border: `1px solid ${mrgColor[500]} !important`,
        boxShadow: "none !important",
        //boxShadow: `0 2px 2px 0 ${mrgColor[500]}14, 0 3px 1px -2px ${mrgColor[500]}20, 0 1px 5px 0 ${mrgColor[500]}12 !important`,
        "&:hover,&:focus": {
          color: `white !important`,
          backgroundColor: `${mrgColor[500]} !important`,
          boxShadow: `0 14px 26px -12px ${mrgColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${mrgColor[500]}20 !important`,
        },
      },
    },
    MuiTypography: {
      //Style a link, use typography color primary:
      //<a><Typography color="primary" variant="inherit"></a>
      colorPrimary: {
        color: `${mrgColor[900]} !important`,
      },
      h1: {},
      paragraph: {},
    },
    MuiCheckbox: {
      colorPrimary: {
        color: `${mrgColor[500]} !important`,
      },
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: `${mrgColor[900]} !important`,
      },
    },
    MuiTextField: {
      root: {
        "& label.Mui-focused": {
          color: `${mrgColor[500]}`,
        },
        "& label.Mui-focused.Mui-error": {
          color: errorColor,
        },
        "& .MuiFilledInput-underline:after": {
          borderBottomColor: `${mrgColor[500]}`,
        },
        "& .MuiFilledInput-underline.Mui-error:after": {
          borderBottomColor: errorColor,
        },
        // Datepicker style, inputs
        "& .MuiInput-underline:after": {
          borderBottomColor: mrgColor[500],
        },
      },
    },
    MuiTabs: {
      root: {
        "& .MuiTabs-indicator": {
          backgroundColor: mrgColor[500],
        },
        "& .MuiTab-textColorPrimary.Mui-selected": {
          color: "black",
        },
      },
    },
    // DatePicker styles
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: mrgColor[500],
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: mrgColor[500],
        // color: "white",
      },
    },
    MuiPickersDay: {
      day: {
        color: mrgColor[500],
      },
      daySelected: {
        backgroundColor: mrgColor[500],
        "&:hover,&:focus": {
          backgroundColor: mrgColor[500],
        },
      },
      dayDisabled: {
        color: mrgColor[200],
      },
      current: {
        color: "black",
      },
    },
    MuiDialogActions: {
      root: {
        "& .MuiButton-textPrimary": {
          color: mrgColor[900],
        },
      },
    },
    // datepicker styles end
  },
});
