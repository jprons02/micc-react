import { mrgTheme } from "./mrg.js";
import { golfTheme } from "./golf.js";
import { villageTheme } from "./village.js";
import { airboatsTheme } from "./airboats.js";
import { historyTheme } from "./history.js";
import { administrationTheme } from "./administration.js";

export const theme = (entity) => {
  switch (entity) {
    case "mrg":
      return mrgTheme;
    case "golf":
      return golfTheme;
    case "village":
      return villageTheme;
    case "airboats":
      return airboatsTheme;
    case "history":
      return historyTheme;
    case "administration":
      return administrationTheme;
    default:
      return mrgTheme;
  }
};
