// Function used to schedule things
// Will need two returns, before scheduled time and after scheduled time
// parameter is a string, ex) December 24, 2021

export const isOrAfterDate = (date) => {
  const d = new Date();
  // nowDate is needed to compare without time
  const nowDate = new Date(
    `${d.getMonth() + 1} ${d.getDate()}, ${d.getFullYear()}`
  );
  const scheduledDate = new Date(date);

  // .getTime() is needed to use the ""==="" operator
  if (nowDate.getTime() >= scheduledDate.getTime()) {
    return true;
  } else {
    return false;
  }
};
