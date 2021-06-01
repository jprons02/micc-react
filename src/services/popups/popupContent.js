// Used here - CustomPopupModal.js
// Change images/links of popups easily
import mrgImage from "assets/img/test/MonthlyPayouts_Calendar_April-1.jpg";
import miccosukeeImage from "assets/img/bg.jpg";

export const getPopupContent = (website) => {
  switch (website) {
    case "miccosukee":
      return {
        linkType: "external",
        link: "https://google.com",
        src: miccosukeeImage,
      };
    case "mrg":
      return {
        linkType: "internal",
        link: "/mrg/promotions",
        src: mrgImage,
      };
    case "golf":
      return {
        linkType: "internal",
        link: "/mrg/promotions",
        src: mrgImage,
      };
    case "village":
      return {
        linkType: "external",
        link: "https://google.com",
        src: miccosukeeImage,
      };
    case "airboats":
      return {
        linkType: "external",
        link: "https://google.com",
        src: miccosukeeImage,
      };
    case "events":
      return {
        linkType: "external",
        link: "https://google.com",
        src: miccosukeeImage,
      };
    case "history":
      return {
        linkType: "external",
        link: "https://google.com",
        src: miccosukeeImage,
      };
    case "administration":
      return {
        linkType: "external",
        link: "https://google.com",
        src: miccosukeeImage,
      };
    default:
      return "";
  }
};
