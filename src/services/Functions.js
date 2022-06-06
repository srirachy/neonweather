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

export const convertTime = (curTime) => {
  const time = new Date(curTime * 1000);
  const locTime = time.toLocaleTimeString().split(':');
  const meridiem = locTime[2].split(' ');
  const newTime = `${addZero(locTime[0])}:${locTime[1]} ${
    meridiem[1]
  }`;
  return newTime;
};
