// Golf Website Theme - colors, fonts, etc.
import { createMuiTheme } from "@material-ui/core/styles";
import { golfColor, errorColor } from "./colors.js";

export const golfTheme = createMuiTheme({
  overrides: {
    // Style sheet name
    MuiButton: {
      // Name of the rule
      // component use example (component is imported from CustomButton):
      //<Button usetheme="contained">
      containedPrimary: {
        backgroundColor: `${golfColor[500]} !important`,
        border: `1px solid ${golfColor[500]} !important`,
        boxShadow: `0 2px 2px 0 ${golfColor[500]}14, 0 3px 1px -2px ${golfColor[500]}20, 0 1px 5px 0 ${golfColor[500]}12 !important`,
        "&:hover,&:focus": {
          backgroundColor: `${golfColor[500]} !important`,
          boxShadow: `0 14px 26px -12px ${golfColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${golfColor[500]}20 !important`,
        },
      },
      //<Button usetheme="outlined">
      outlinedPrimary: {
        color: `${golfColor[500]} !important`,
        backgroundColor: `transparent !important`,
        border: `1px solid ${golfColor[500]} !important`,
        boxShadow: "none !important",
        //boxShadow: `0 2px 2px 0 ${golfColor[500]}14, 0 3px 1px -2px ${golfColor[500]}20, 0 1px 5px 0 ${golfColor[500]}12 !important`,
        "&:hover,&:focus": {
          color: `white !important`,
          backgroundColor: `${golfColor[500]} !important`,
          boxShadow: `0 14px 26px -12px ${golfColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${golfColor[500]}20 !important`,
        },
      },
    },
    MuiTypography: {
      //Style a link, use typography color primary:
      //<a><Typography color="primary" variant="inherit"></a>
      colorPrimary: {
        color: `${golfColor[900]} !important`,
      },
      h1: {},
      paragraph: {},
    },
    MuiCheckbox: {
      colorPrimary: {
        color: `${golfColor[500]} !important`,
      },
    },
    MuiSvgIcon: {
      colorPrimary: {
        color: `${golfColor[500]} !important`,
      },
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: `${golfColor[900]} !important`,
      },
    },
    MuiTextField: {
      root: {
        "& label.Mui-focused": {
          color: `${golfColor[500]}`,
        },
        "& label.Mui-focused.Mui-error": {
          color: errorColor,
        },
        "& .MuiFilledInput-underline:after": {
          borderBottomColor: `${golfColor[500]}`,
        },
        "& .MuiFilledInput-underline.Mui-error:after": {
          borderBottomColor: errorColor,
        },
        // Datepicker style, inputs
        "& .MuiInput-underline:after": {
          borderBottomColor: golfColor[500],
        },
      },
    },
    MuiTabs: {
      root: {
        "& .MuiTabs-indicator": {
          backgroundColor: golfColor[500],
        },
        "& .MuiTab-textColorPrimary.Mui-selected": {
          color: "black",
        },
        "& .MuiTab-textColorInherit.Mui-selected": {
          backgroundColor: golfColor[500],
          boxShadow: `0 14px 26px -12px ${golfColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${golfColor[500]}20 !important`,
        },
      },
    },
    // DatePicker styles
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: golfColor[500],
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: golfColor[500],
        // color: "white",
      },
    },
    MuiPickersDay: {
      day: {
        color: golfColor[500],
      },
      daySelected: {
        backgroundColor: golfColor[500],
        "&:hover,&:focus": {
          backgroundColor: golfColor[500],
        },
      },
      dayDisabled: {
        color: golfColor[200],
      },
      current: {
        color: "black",
      },
    },
    MuiDialogActions: {
      root: {
        "& .MuiButton-textPrimary": {
          color: golfColor[900],
        },
      },
    },
    // datepicker styles end
  },
});
