// convert unix date format to us date format
export const convertUnixDate = (curDate) => {
  const date = new Date(curDate * 1000);
  return date.toLocaleDateString('en-US');
};

// convert date object to xx/xx/xxxx format and convert day value to text
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

// add zero to day or month if less than 10, basically jan to sept
export const addZero = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
};

// convert 24h time to meridiem time
export const convertTime = (curTime) => {
  const time = new Date(curTime * 1000);
  const locTime = time.toLocaleTimeString().split(':');
  const meridiem = locTime[2].split(' ');
  const newTime = `${addZero(locTime[0])}:${locTime[1]} ${
    meridiem[1]
  }`;
  return newTime;
};

// create obj to add to state array
export const createWeatherObj = (data, name, lat, lng) => {
  const imgUrlBase = 'http://openweathermap.org/img/wn/';
  const imgUrlExt = '.png';
  const wObj = {
    cityTitle: name,
    temp: data.temp,
    img: `${imgUrlBase}${data.weather[0].icon}${imgUrlExt}`,
    desc: data.weather[0].description,
    cityLat: lat,
    cityLng: lng,
  };
  return wObj;
};
