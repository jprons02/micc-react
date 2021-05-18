// Golf Website Theme - colors, fonts, etc.
import { createMuiTheme } from "@material-ui/core/styles";
import { airboatsColor, errorColor } from "./colors.js";

export const airboatsTheme = createMuiTheme({
  overrides: {
    // Style sheet name
    MuiButton: {
      // Name of the rule
      // component use example (component is imported from CustomButton):
      //<Button usetheme="contained">
      containedPrimary: {
        backgroundColor: `${airboatsColor[500]} !important`,
        border: `1px solid ${airboatsColor[500]} !important`,
        boxShadow: `0 2px 2px 0 ${airboatsColor[500]}14, 0 3px 1px -2px ${airboatsColor[500]}20, 0 1px 5px 0 ${airboatsColor[500]}12 !important`,
        "&:hover,&:focus": {
          backgroundColor: `${airboatsColor[500]} !important`,
          boxShadow: `0 14px 26px -12px ${airboatsColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${airboatsColor[500]}20 !important`,
        },
      },
      //<Button usetheme="outlined">
      outlinedPrimary: {
        color: `${airboatsColor[500]} !important`,
        backgroundColor: `transparent !important`,
        border: `1px solid ${airboatsColor[500]} !important`,
        boxShadow: "none !important",
        //boxShadow: `0 2px 2px 0 ${airboatsColor[500]}14, 0 3px 1px -2px ${airboatsColor[500]}20, 0 1px 5px 0 ${airboatsColor[500]}12 !important`,
        "&:hover,&:focus": {
          color: `white !important`,
          backgroundColor: `${airboatsColor[500]} !important`,
          boxShadow: `0 14px 26px -12px ${airboatsColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${airboatsColor[500]}20 !important`,
        },
      },
    },
    MuiTypography: {
      //Style a link, use typography color primary:
      //<a><Typography color="primary" variant="inherit"></a>
      colorPrimary: {
        color: `${airboatsColor[900]} !important`,
      },
      h1: {},
      paragraph: {},
    },
    MuiCheckbox: {
      colorPrimary: {
        color: `${airboatsColor[500]} !important`,
      },
    },
    MuiSvgIcon: {
      colorPrimary: {
        color: `${airboatsColor[500]} !important`,
      },
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: `${airboatsColor[900]} !important`,
      },
    },
    MuiTextField: {
      root: {
        "& label.Mui-focused": {
          color: `${airboatsColor[500]}`,
        },
        "& label.Mui-focused.Mui-error": {
          color: errorColor,
        },
        "& .MuiFilledInput-underline:after": {
          borderBottomColor: `${airboatsColor[500]}`,
        },
        "& .MuiFilledInput-underline.Mui-error:after": {
          borderBottomColor: errorColor,
        },
        // Datepicker style, inputs
        "& .MuiInput-underline:after": {
          borderBottomColor: airboatsColor[500],
        },
      },
    },
    MuiTabs: {
      root: {
        "& .MuiTabs-indicator": {
          backgroundColor: airboatsColor[500],
        },
        "& .MuiTab-textColorPrimary.Mui-selected": {
          color: "black",
        },
        "& .MuiTab-textColorInherit.Mui-selected": {
          backgroundColor: airboatsColor[500],
          boxShadow: `0 14px 26px -12px ${airboatsColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${airboatsColor[500]}20 !important`,
        },
      },
    },
    // DatePicker styles
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: airboatsColor[500],
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: airboatsColor[500],
        // color: "white",
      },
    },
    MuiPickersDay: {
      day: {
        color: airboatsColor[500],
      },
      daySelected: {
        backgroundColor: airboatsColor[500],
        "&:hover,&:focus": {
          backgroundColor: airboatsColor[500],
        },
      },
      dayDisabled: {
        color: airboatsColor[200],
      },
      current: {
        color: "black",
      },
    },
    MuiDialogActions: {
      root: {
        "& .MuiButton-textPrimary": {
          color: airboatsColor[900],
        },
      },
    },
    // datepicker styles end
  },
});
