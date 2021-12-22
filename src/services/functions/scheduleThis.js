// Function used to schedule things
// parameter is an array of numbers: [year, month, day]
// 2nd parameter is optional
// returns boolean
// stops on the the stop date exactly at 12am.
// example) let birthday = new Date(1995, 11, 17) // the month is 0-indexed
// use example) isRunning([2021, 12, 22], [2021, 12, 31]) ? 'do this during this timeframe' : 'this is done outside of this timeframe'

export const isRunning = (start, stop) => {
  const d = new Date();
  // nowDate is needed to compare without time
  const nowDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const startDate = new Date(start[0], start[1] - 1, start[2]);
  const endDate = stop ? new Date(stop[0], stop[1] - 1, stop[2]) : null;

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
