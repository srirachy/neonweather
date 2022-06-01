import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DayForecastWrapper = styled.section``;

function DayWeather({ dayData }) {
  useEffect(() => {
    if (dayData) {
      console.log(dayData);
    }
  }, [dayData]);
  return (
    <DayForecastWrapper>
      <p>Forecast Details</p>
    </DayForecastWrapper>
  );
}

DayWeather.propTypes = {
  dayData: PropTypes.instanceOf(Object),
};

DayWeather.defaultProps = {
  dayData: {},
};

export default DayWeather;
