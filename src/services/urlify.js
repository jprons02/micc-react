// Takes string, transform to lowercase, splits into array and then joins array with "-"
// example) "Anniversary Gift" will become "anniversary-gift"
export const urlify = (string) => {
  const splitString = string.toLowerCase().split(" ");
  if (splitString.length > 1) {
    return splitString.join("-");
  } else {
    return splitString[0];
  }
};
