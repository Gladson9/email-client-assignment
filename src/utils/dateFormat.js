export const dateFormat = (date) => {
  let newDate = new Date(date);
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  if (month < 10) {
    month = "0" + month;
  }

  let time = newDate.toLocaleTimeString();
  return `${day}/${month}/${year} ${time.slice(0, -6)}${time
    .slice(-2)
    .toLowerCase()}`;
};
