// Simple function to test if todays date is a major holiday

export const isHoliday = () => {
  const d = new Date();
  // nowDate is needed to compare without time
  const nowDate = new Date(
    `${d.getMonth() + 1} ${d.getDate()}, ${d.getFullYear()}`
  );

  const getThanksgivingDayUSA = (year = new Date().getFullYear()) => {
    const first = new Date(year, 10, 1);
    const day_of_week = first.getDay();
    return 22 + ((11 - day_of_week) % 7);
  };
  const thanksgiving = new Date(
    `November ${getThanksgivingDayUSA()}, ${d.getFullYear()}`
  );
  const blackFriday = new Date(
    `November ${getThanksgivingDayUSA() + 1}, ${d.getFullYear()}`
  );
  const xmasEve = new Date(`December 24, ${d.getFullYear()}`);
  const xmas = new Date(`December 25, ${d.getFullYear()}`);
  const newYearsEve = new Date(`December 31, ${d.getFullYear()} `);
  const newYears = new Date(`January 1, ${d.getFullYear()}`);

  // .getTime() is needed to use the ""==="" operator
  if (
    nowDate.getTime() === thanksgiving.getTime() ||
    nowDate.getTime() === blackFriday.getTime() ||
    nowDate.getTime() === xmasEve.getTime() ||
    nowDate.getTime() === xmas.getTime() ||
    nowDate.getTime() === newYearsEve.getTime() ||
    nowDate.getTime() === newYears.getTime()
  ) {
    return true;
  }
};
