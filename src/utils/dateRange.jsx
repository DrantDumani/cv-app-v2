export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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
