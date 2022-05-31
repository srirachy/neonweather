export const convertUnixDate = (curDate) => {
  const date = new Date(curDate * 1000);
  return date.toLocaleDateString('en-US');
};

export const parseDate = (curDate) => {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const date = curDate.split('/');
  const fullDate = new Date(curDate);
  const curDay = fullDate.getDay();
  const day = weekday[curDay];

  const dateObj = {
    month: date[0],
    day: date[1],
    year: date[2],
    dayOfWeek: day,
  };
  return dateObj;
};

export const addZero = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
};
