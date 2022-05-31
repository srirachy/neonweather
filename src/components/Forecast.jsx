import React from 'react';
import {
  convertUnixDate,
  parseDate,
  addZero,
} from '../services/Functions';

const Forecast = ({ dailyData }) => {
  const fcElmts = [];
  const imgUrlBase = 'http://openweathermap.org/img/wn/';
  const imgUrlExt = '@2x.png';
  const showWeather = (day) => {
    console.log(day);
  };
  const onKeyPressHandler = () => {};
  dailyData.forEach(
    ({ temp: { max, min }, weather, dt, humidity }) => {
      const wIcon = weather[0].icon;
      const wDesc = weather[0].description;
      const iconUrl = `${imgUrlBase}${wIcon}${imgUrlExt}`;
      const newDate = convertUnixDate(dt); // dont need this to print
      const sDate = parseDate(newDate);
      // const curMonth = addZero(sDate.month);
      const curDay = addZero(sDate.day);
      const dayText = sDate.dayOfWeek;
      fcElmts.push(
        <div
          className="dayCard"
          onClick={() => showWeather(dayText)}
          onKeyPress={onKeyPressHandler}
          role="button"
          tabIndex="0"
        >
          <p>
            {dayText} {curDay}
          </p>
          <p>
            {max} / {min}
          </p>
          <img src={iconUrl} alt={wDesc} />
          <p>{wDesc}</p>
          <p>Humidity: {humidity}</p>
        </div>,
      );
    },
  );
  return fcElmts;
};

export default Forecast;
