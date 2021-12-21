// Function used to schedule things
// parameter is a string, ex) "December 24, 2021" note the comma after the day number
// 2nd parameter is optional
// returns boolean
// stops on the the stop date exactly at 12am.

export const isRunning = (start, stop) => {
  const d = new Date();
  // nowDate is needed to compare without time
  const nowDate = new Date(
    `${d.getMonth() + 1} ${d.getDate()}, ${d.getFullYear()}`
  );
  const startDate = new Date(start);
  const endDate = new Date(stop);

  // .getTime() is needed to use the ""==="" operator
  // If only start date parameter is provided:
  if (!stop) {
    if (nowDate.getTime() >= startDate.getTime()) {
      return true;
    } else {
      return false;
    }
  } else {
    // If both start and end date parameters are provided:
    if (
      nowDate.getTime() >= startDate.getTime() &&
      nowDate.getTime() <= endDate.getTime()
    ) {
      return true;
    } else {
      return false;
    }
  }
};
