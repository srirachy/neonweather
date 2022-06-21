import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { convertTime } from '../services/Functions';
import { colors } from '../utils/NeonAnimations';

const DayForecastContainer = styled.section`
  margin-top: 20px;
  max-height: 100%;
`;

const TitleWrapper = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  alight-content: center;
  margin: 5px 0;
  p {
    font-family: 'Paytone One', sans-serif;
    color: ${colors.white};
    text-shadow: 0 0 7px ${colors.white}, 0 0 10px ${colors.white},
      0 0 21px ${colors.white}, 0 0 42px ${colors.neon_lime},
      0 0 82px ${colors.neon_lime}, 0 0 92px ${colors.neon_lime},
      0 0 102px ${colors.neon_lime}, 0 0 151px ${colors.neon_lime};
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 65%;
  justify-content: space-evenly;
  margin: 20px 0;
`;

const SunWrapper = styled.div`
  color: ${colors.white};
  text-shadow: 0 0 7px ${colors.white}, 0 0 10px ${colors.white},
    0 0 21px ${colors.white}, 0 0 42px ${colors.neon_pink},
    0 0 82px ${colors.neon_pink}, 0 0 92px ${colors.neon_pink},
    0 0 102px ${colors.neon_pink}, 0 0 151px ${colors.neon_pink};
`;

const MoonWrapper = styled.div`
  color: ${colors.white};
  text-shadow: 0 0 7px ${colors.white}, 0 0 10px ${colors.white},
    0 0 21px ${colors.white}, 0 0 42px ${colors.electric_blue},
    0 0 82px ${colors.electric_blue}, 0 0 92px ${colors.electric_blue},
    0 0 102px ${colors.electric_blue},
    0 0 151px ${colors.electric_blue};
`;

function DayWeather({ dayData, ariaTestId, dayTitle }) {
  const [idName, setIdName] = useState('');
  useEffect(() => {
    if (ariaTestId) {
      setIdName(`${ariaTestId}_detail`);
    }
  }, [ariaTestId]);
  const renderDetails = () => {
    const dElmts = [];
    dElmts.push(
      <SunWrapper key={nanoid()}>
        <p key={nanoid()}>{dayData.temp.day.toFixed(1)}&deg;F</p>
        <p key={nanoid()}>
          Feels like: {dayData.feels_like.day.toFixed(1)}&deg;F
        </p>
        <p key={nanoid()}>Sunrise: {convertTime(dayData.sunrise)}</p>
        <p key={nanoid()}>Sunset: {convertTime(dayData.sunset)}</p>
      </SunWrapper>,
    );
    dElmts.push(
      <MoonWrapper key={nanoid()}>
        <p key={nanoid()}>{dayData.temp.night.toFixed(1)}&deg;F</p>
        <p key={nanoid()}>
          Feels like: {dayData.feels_like.night.toFixed(1)}&deg;F
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
    <DayForecastContainer data-testid={idName} key={nanoid()}>
      <TitleWrapper>
        <p key={nanoid()}>Forecast Details</p>
        <p>{dayTitle}</p>
      </TitleWrapper>
      <DetailsWrapper key={nanoid()}>
        {/* wait for dayData to get data */}
        {Object.keys(dayData).length !== 0 && renderDetails()}
      </DetailsWrapper>
    </DayForecastContainer>
  );
}

DayWeather.propTypes = {
  dayData: PropTypes.instanceOf(Object),
  ariaTestId: PropTypes.string,
  dayTitle: PropTypes.string,
};

DayWeather.defaultProps = {
  dayData: {},
  ariaTestId: '',
  dayTitle: '',
};

export default DayWeather;
