// Golf Website Theme - colors, fonts, etc.
import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const primary = green;

export const golfTheme = createMuiTheme({
  overrides: {
    // Style sheet name
    MuiButton: {
      // Name of the rule
      root: {
        backgroundColor: `${primary[500]} !important`,
        boxShadow: `0 2px 2px 0 ${primary[500]}14, 0 3px 1px -2px ${primary[500]}20, 0 1px 5px 0 ${primary[500]}12 !important`,
        "&:hover,&:focus": {
          backgroundColor: `${primary[500]} !important`,
          boxShadow: `0 14px 26px -12px ${primary[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${primary[500]}20 !important`,
        },
      },
    },
    MuiTypography: {
      // colorInherit property is used to style links.
      // component example) <Link to={`/`}><Typography color="inherit" variant="inherit"></Links>
      colorInherit: {
        color: `${primary[500]}`,
      },
      h1: {},
      paragraph: {},
    },
  },
});
