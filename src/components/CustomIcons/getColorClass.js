export const getColorClass = (color) => {
  switch (color) {
    case "action":
      return "MuiSvgIcon-colorAction";
    case "disabled":
      return "MuiSvgIcon-colorDisabled";
    case "error":
      return "MuiSvgIcon-colorError";
    case "inherit":
      return "";
    case "primary":
      return "MuiSvgIcon-colorPrimary";
    case "secondary":
      return "MuiSvgIcon-colorSecondary";
    default:
      return "";
  }
};
