// Golf Website Theme - colors, fonts, etc.
import { createMuiTheme } from "@material-ui/core/styles";
import { historyColor, errorColor } from "./colors.js";

export const historyTheme = createMuiTheme({
  overrides: {
    // Style sheet name
    MuiButton: {
      // Name of the rule
      // component use example (component is imported from CustomButton):
      //<Button usetheme="contained">
      containedPrimary: {
        backgroundColor: `${historyColor[500]} !important`,
        border: `1px solid ${historyColor[500]} !important`,
        boxShadow: `0 2px 2px 0 ${historyColor[500]}14, 0 3px 1px -2px ${historyColor[500]}20, 0 1px 5px 0 ${historyColor[500]}12 !important`,
        "&:hover,&:focus": {
          backgroundColor: `${historyColor[500]} !important`,
          boxShadow: `0 14px 26px -12px ${historyColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${historyColor[500]}20 !important`,
        },
      },
      //<Button usetheme="outlined">
      outlinedPrimary: {
        color: `${historyColor[500]} !important`,
        backgroundColor: `transparent !important`,
        border: `1px solid ${historyColor[500]} !important`,
        boxShadow: "none !important",
        //boxShadow: `0 2px 2px 0 ${historyColor[500]}14, 0 3px 1px -2px ${historyColor[500]}20, 0 1px 5px 0 ${historyColor[500]}12 !important`,
        "&:hover,&:focus": {
          color: `white !important`,
          backgroundColor: `${historyColor[500]} !important`,
          boxShadow: `0 14px 26px -12px ${historyColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${historyColor[500]}20 !important`,
        },
      },
    },
    MuiTypography: {
      //Style a link, use typography color primary:
      //<a><Typography color="primary" variant="inherit"></a>
      colorPrimary: {
        color: `${historyColor[900]} !important`,
      },
      h1: {},
      paragraph: {},
    },
    MuiCheckbox: {
      colorPrimary: {
        color: `${historyColor[500]} !important`,
      },
    },
    MuiSvgIcon: {
      colorPrimary: {
        color: `${historyColor[500]} !important`,
      },
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: `${historyColor[900]} !important`,
      },
    },
    MuiTextField: {
      root: {
        "& label.Mui-focused": {
          color: `${historyColor[500]}`,
        },
        "& label.Mui-focused.Mui-error": {
          color: errorColor,
        },
        "& .MuiFilledInput-underline:after": {
          borderBottomColor: `${historyColor[500]}`,
        },
        "& .MuiFilledInput-underline.Mui-error:after": {
          borderBottomColor: errorColor,
        },
        // Datepicker style, inputs
        "& .MuiInput-underline:after": {
          borderBottomColor: historyColor[500],
        },
      },
    },
    MuiTabs: {
      root: {
        "& .MuiTabs-indicator": {
          backgroundColor: historyColor[500],
        },
        "& .MuiTab-textColorPrimary.Mui-selected": {
          color: "black",
        },
        "& .MuiTab-textColorInherit.Mui-selected": {
          backgroundColor: historyColor[500],
          boxShadow: `0 14px 26px -12px ${historyColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${historyColor[500]}20 !important`,
        },
      },
    },
    // DatePicker styles
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: historyColor[500],
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: historyColor[500],
        // color: "white",
      },
    },
    MuiPickersDay: {
      day: {
        color: historyColor[500],
      },
      daySelected: {
        backgroundColor: historyColor[500],
        "&:hover,&:focus": {
          backgroundColor: historyColor[500],
        },
      },
      dayDisabled: {
        color: historyColor[200],
      },
      current: {
        color: "black",
      },
    },
    MuiDialogActions: {
      root: {
        "& .MuiButton-textPrimary": {
          color: historyColor[900],
        },
      },
    },
    // datepicker styles end
  },
});
