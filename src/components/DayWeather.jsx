import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { convertTime } from '../services/Functions';

const DayForecastWrapper = styled.section`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const DetailsWrapper = styled.div`
  min-height: 100%;
  min-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const SunWrapper = styled.div``;

const MoonWrapper = styled.div``;

function DayWeather({ dayData, ariaTestId }) {
  const [idName, setIdName] = useState('');
  // useEffect(() => {
  //   if (Object.keys(dayData).length !== 0) {
  //     console.log(dayData);
  //   }
  // }, [dayData]);
  useEffect(() => {
    if (ariaTestId) {
      setIdName(`${ariaTestId}_detail`);
    }
  }, [ariaTestId]);
  const renderDetails = () => {
    const dElmts = [];
    dElmts.push(
      <SunWrapper key={nanoid()}>
        <p key={nanoid()}>{dayData.temp.day}&deg;F</p>
        <p key={nanoid()}>
          Feels like: {dayData.feels_like.day}&deg;F
        </p>
        <p key={nanoid()}>Sunrise: {convertTime(dayData.sunrise)}</p>
        <p key={nanoid()}>Sunset: {convertTime(dayData.sunset)}</p>
      </SunWrapper>,
    );
    dElmts.push(
      <MoonWrapper key={nanoid()}>
        <p key={nanoid()}>{dayData.temp.night}&deg;F</p>
        <p key={nanoid()}>
          Feels like: {dayData.feels_like.night}&deg;F
        </p>
        <p key={nanoid()}>
          Moonrise: {convertTime(dayData.moonrise)}
        </p>
        <p key={nanoid()}>Moonset: {convertTime(dayData.moonset)}</p>
      </MoonWrapper>,
    );
    return dElmts;
  };
  return (
    <DayForecastWrapper data-testid={idName} key={nanoid()}>
      <p key={nanoid()}>Forecast Details</p>
      <DetailsWrapper key={nanoid()}>
        {/* wait for dayData to get data */}
        {Object.keys(dayData).length !== 0 && renderDetails()}
      </DetailsWrapper>
    </DayForecastWrapper>
  );
}

DayWeather.propTypes = {
  dayData: PropTypes.instanceOf(Object),
  ariaTestId: PropTypes.string,
};

DayWeather.defaultProps = {
  dayData: {},
  ariaTestId: '',
};

export default DayWeather;
