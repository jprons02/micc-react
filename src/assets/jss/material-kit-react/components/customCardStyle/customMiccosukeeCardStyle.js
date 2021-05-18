import { mrgColor } from "themes/colors.js";
import { golfColor } from "themes/colors.js";
import { villageColor } from "themes/colors.js";
import { airboatsColor } from "themes/colors.js";
import { historyColor } from "themes/colors.js";
import { administrationColor } from "themes/colors.js";

const buttonNoTheme = {
  mrgButton: {
    backgroundColor: `${mrgColor[500]} !important`,
    border: `1px solid ${mrgColor[500]} !important`,
    boxShadow: `0 2px 2px 0 ${mrgColor[500]}14, 0 3px 1px -2px ${mrgColor[500]}20, 0 1px 5px 0 ${mrgColor[500]}12 !important`,
    "&:hover,&:focus": {
      backgroundColor: `${mrgColor[500]} !important`,
      boxShadow: `0 14px 26px -12px ${mrgColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${mrgColor[500]}20 !important`,
    },
  },
  golfButton: {
    backgroundColor: `${golfColor[500]} !important`,
    border: `1px solid ${golfColor[500]} !important`,
    boxShadow: `0 2px 2px 0 ${golfColor[500]}14, 0 3px 1px -2px ${golfColor[500]}20, 0 1px 5px 0 ${golfColor[500]}12 !important`,
    "&:hover,&:focus": {
      backgroundColor: `${golfColor[500]} !important`,
      boxShadow: `0 14px 26px -12px ${golfColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${golfColor[500]}20 !important`,
    },
  },
  villageButton: {
    backgroundColor: `${villageColor[500]} !important`,
    border: `1px solid ${villageColor[500]} !important`,
    boxShadow: `0 2px 2px 0 ${villageColor[500]}14, 0 3px 1px -2px ${villageColor[500]}20, 0 1px 5px 0 ${villageColor[500]}12 !important`,
    "&:hover,&:focus": {
      backgroundColor: `${villageColor[500]} !important`,
      boxShadow: `0 14px 26px -12px ${villageColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${villageColor[500]}20 !important`,
    },
  },
  airboatsButton: {
    backgroundColor: `${airboatsColor[500]} !important`,
    border: `1px solid ${airboatsColor[500]} !important`,
    boxShadow: `0 2px 2px 0 ${airboatsColor[500]}14, 0 3px 1px -2px ${airboatsColor[500]}20, 0 1px 5px 0 ${airboatsColor[500]}12 !important`,
    "&:hover,&:focus": {
      backgroundColor: `${airboatsColor[500]} !important`,
      boxShadow: `0 14px 26px -12px ${airboatsColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${airboatsColor[500]}20 !important`,
    },
  },
  historyButton: {
    backgroundColor: `${historyColor[500]} !important`,
    border: `1px solid ${historyColor[500]} !important`,
    boxShadow: `0 2px 2px 0 ${historyColor[500]}14, 0 3px 1px -2px ${historyColor[500]}20, 0 1px 5px 0 ${historyColor[500]}12 !important`,
    "&:hover,&:focus": {
      backgroundColor: `${historyColor[500]} !important`,
      boxShadow: `0 14px 26px -12px ${historyColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${historyColor[500]}20 !important`,
    },
  },
  administrationButton: {
    backgroundColor: `${administrationColor[500]} !important`,
    border: `1px solid ${administrationColor[500]} !important`,
    boxShadow: `0 2px 2px 0 ${administrationColor[500]}14, 0 3px 1px -2px ${administrationColor[500]}20, 0 1px 5px 0 ${administrationColor[500]}12 !important`,
    "&:hover,&:focus": {
      backgroundColor: `${administrationColor[500]} !important`,
      boxShadow: `0 14px 26px -12px ${administrationColor[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${administrationColor[500]}20 !important`,
    },
  },
};

export default buttonNoTheme;
