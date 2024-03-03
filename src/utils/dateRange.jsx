export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getYearlyRange = () => {
  const start = 1980;
  const end = new Date().getFullYear();
  const range = [];
  for (let y = start; y <= end; y++) {
    range.push(y);
  }
  return range;
};
