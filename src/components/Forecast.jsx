import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import DayWeather from './DayWeather';
import {
  convertUnixDate,
  parseDate,
  addZero,
} from '../services/Functions';

const ForecastWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 60%;
  margin: 0 auto;
  background-color: #aaa;
`;

const WeekForecastWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  min-height: 100%;
  min-width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const DayWrapper = styled.div`
  min-height: 100%;
  min-width: 11%;
  background-color: ${(props) =>
    props.isSelected ? '#ffffff' : '#abe'};
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
  }
`;

function Forecast({ dailyData }) {
  const [dayData, setDayData] = useState({});
  const [isSelected, setIsSelected] = useState('');
  useEffect(() => {
    if (dailyData) {
      setDayData(dailyData[0]);
    }
  }, [dailyData]);
  const renderForecast = () => {
    const fcElmts = [];
    const imgUrlBase = 'http://openweathermap.org/img/wn/';
    const imgUrlExt = '@2x.png';
    let buttonCount = 0;
    const getDayData = (objData, id) => {
      setDayData(objData);
      setIsSelected(id);
    };
    const onKeyPressHandler = () => {}; // mostly for eslinter for now
    dailyData.forEach(
      ({ temp: { max, min }, weather, dt, humidity }) => {
        const curData = dailyData[buttonCount];
        const wIcon = weather[0].icon;
        const wDesc = weather[0].description;
        const iconUrl = `${imgUrlBase}${wIcon}${imgUrlExt}`;
        // const newDate = convertUnixDate(dt); // dont need this to print
        const sDate = parseDate(convertUnixDate(dt));
        // const curMonth = addZero(sDate.month);
        const curDay = addZero(sDate.day);
        const dayText = sDate.dayOfWeek;
        const testId = `button_${buttonCount}`;
        fcElmts.push(
          <DayWrapper
            className="dayCard"
            data-testid={testId}
            onClick={() => getDayData(curData, dt)}
            onKeyPress={onKeyPressHandler}
            tabIndex={buttonCount}
            role="button"
            isSelected={isSelected === dt}
            key={nanoid()}
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
          </DayWrapper>,
        );
        buttonCount += 1; // add one to buttonCount for aria id
      },
    );
    return fcElmts;
  };
  return (
    <ForecastWrapper>
      <WeekForecastWrapper>
        <p>Daily Forecast</p>
        <CardWrapper>{renderForecast()}</CardWrapper>
      </WeekForecastWrapper>
      <DayWeather dayData={dayData} />
    </ForecastWrapper>
  );
}

Forecast.propTypes = {
  dailyData: PropTypes.instanceOf(Object),
};

Forecast.defaultProps = {
  dailyData: {},
};

export default Forecast;
