import { mrgTheme } from "./mrg.js";
import { golfTheme } from "./golf.js";

export const theme = (entity) => {
  switch (entity) {
    case "mrg":
      return mrgTheme;
    case "golf":
      return golfTheme;
    default:
      return mrgTheme;
  }
};
