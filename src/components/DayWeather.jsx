import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DayForecastWrapper = styled.section`
  width: 100%;
  min-height: 100%;
`;

const DetailsWrapper = styled.section`
  min-height: 100%;
  min-width: 90%;
`;

function DayWeather({ dayData }) {
  useEffect(() => {
    if (Object.keys(dayData).length !== 0) {
      console.log(dayData);
      // console.log(dayData.feels_like);
    }
  }, [dayData]);
  const renderDetails = () => {
    const dElmts = [];
    dElmts.push(<p>{dayData.dt}</p>);
    dElmts.push(<p>{dayData.feels_like.day}</p>);
    dElmts.push(<p>{dayData.sunrise}</p>);
    return dElmts;
  };
  return (
    <DayForecastWrapper>
      <p>Forecast Details</p>
      <DetailsWrapper>
        {/* wait for dayData to get data */}
        {Object.keys(dayData).length !== 0 && renderDetails()}
      </DetailsWrapper>
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
