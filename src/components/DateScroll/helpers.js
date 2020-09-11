export const get2WeekForwardDate = () => {
  let today = new Date();
  let tomorrow = new Date();
  let dates = [];

  for (let i = 0; i < 14; i++) {
    let nextDay = tomorrow.setDate(today.getDate() + i);
    dates.push(nextDay);
  }

  return dates;
};
