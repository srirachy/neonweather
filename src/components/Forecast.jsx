import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import DayWeather from './DayWeather';
import LocationContext from '../utils/LocationContext';
import { colors, flicker } from '../utils/NeonAnimations';
import { device } from '../utils/Device';
import {
  convertUnixDate,
  parseDate,
  convertMonth,
  addZero,
} from '../services/Functions';

const ForecastContainer = styled.article`
  width: 95%;
  max-height: 90%;
  margin: 15px auto;
`;

const WeekForecastWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 70%;
`;

const TitleContainer = styled.div`
  margin: 5px 0;
  height: 12%;
  p {
    font-family: 'Paytone One', sans-serif;
    color: ${colors.white};
    text-shadow: 0 0 7px ${colors.white}, 0 0 21px ${colors.white},
      0 0 42px ${colors.neon_orange}, 0 0 82px ${colors.neon_orange},
      0 0 92px ${colors.neon_orange}, 0 0 102px ${colors.neon_orange},
      0 0 151px ${colors.neon_orange};
  }
  @media ${device.laptop} {
    p {
      margin: 10px 0;
      font-size: 2rem;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  height: 88%;
  margin: 20px 0;
  p {
    font-size: 0.7rem;
  }
  img {
    margin: 0 auto;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
  }
  @media ${device.laptop} {
    p {
      font-size: 1rem;
    }
    img {
      height: 4rem;
      width: 4rem;
    }
  }
`;

const CardWrapper = styled.div`
  height: 30%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 5px 5px;
  text-transform: capitalize;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${colors.white};
  text-shadow: 0 0 7px ${colors.white}, 0 0 10px ${colors.white},
    0 0 21px ${colors.white}, 0 0 42px ${colors.white};
  border: 0.2rem solid ${colors.white};
  border-radius: 1rem;
  padding: 0.3em;
  box-shadow: ${(props) =>
    props.isSelected
      ? `0 0 0.2rem ${colors.white}, 0 0 0.2rem ${colors.white},
    0 0 2rem ${colors.white}, 0 0 0.9rem ${colors.white},
    0 0 2.8rem ${colors.white},
    inset 0 0 1.3rem ${colors.white}`
      : `0 0 0.2rem ${colors.white}, 0 0 0.2rem ${colors.white},
    0 0 1rem ${colors.white}, 0 0 0.9rem ${colors.neon_orange},
    0 0 1.5rem ${colors.neon_orange},
    inset 0 0 1.3rem ${colors.neon_orange}`};
  &:hover {
    cursor: pointer;
    animation: ${flicker.neon_orange} 2.5s infinite alternate;
  }
  @media ${device.laptop} {
    width: 15%;
    margin: 50px 30px;
  }
`;

const TempWrapper = styled.div`
  display: flex;
  flex-direction: row;
  white-space: pre-wrap; /* white space when using flexbox */
  justify-content: center;
  color: ${colors.white};
  text-shadow: 0 0 7px ${colors.white}, 0 0 10px ${colors.white},
    0 0 21px ${colors.white}, 0 0 42px ${colors.neon_orange},
    0 0 82px ${colors.neon_orange}, 0 0 92px ${colors.neon_orange},
    0 0 102px ${colors.neon_orange}, 0 0 151px ${colors.neon_orange};
  .highTemp {
    text-shadow: 0 0 7px ${colors.neon_red},
      0 0 10px ${colors.neon_red}, 0 0 21px ${colors.neon_red},
      0 0 42px ${colors.neon_red}, 0 0 82px ${colors.neon_red},
      0 0 92rem ${colors.neon_red}, 0 0 102px ${colors.neon_red},
      0 0 151rem ${colors.neon_red};
  }
  .lowTemp {
    text-shadow: 0 0 7px ${colors.neon_blue},
      0 0 10px ${colors.neon_blue}, 0 0 21px ${colors.neon_blue},
      0 0 42px ${colors.neon_blue}, 0 0 82px ${colors.neon_blue},
      0 0 92px ${colors.neon_blue}, 0 0 102px ${colors.neon_blue},
      0 0 151px ${colors.neon_blue};
  }
`;

function Forecast({ dailyData }) {
  const [dayData, setDayData] = useState({});
  const [isSelected, setIsSelected] = useState('');
  const [ariaTestId, setAriaTestId] = useState('');
  const [dayTitle, setDayTitle] = useState('');
  const [curMonth, setCurMonth] = useState('');
  const { title } = useContext(LocationContext);
  // set initial day weather info and selected card
  useEffect(() => {
    if (Object.keys(dailyData).length !== 0) {
      const initDate = parseDate(convertUnixDate(dailyData[0].dt));
      const initDayInt = addZero(initDate.day);
      const initTitleText = `${initDate.dayOfWeek} ${initDayInt}`;
      setCurMonth(convertMonth(initDate.month));
      setDayData(dailyData[0]);
      setIsSelected(dailyData[0].dt);
      setAriaTestId('button_0');
      setDayTitle(initTitleText);
    }
  }, [dailyData]);
  const renderForecast = () => {
    const fcElmts = [];
    const imgUrlBase = 'http://openweathermap.org/img/wn/';
    const imgUrlExt = '@2x.png';
    let buttonCount = 0;
    // pass user selected card data
    const userSelectDay = (
      objData,
      id,
      ariaId,
      dayString,
      dayInt,
    ) => {
      const fullDayString = `${dayString} ${dayInt}`;
      setDayData(objData);
      setIsSelected(id);
      setAriaTestId(ariaId);
      setDayTitle(fullDayString);
    };
    // create weekly weather forecast component
    dailyData.forEach(
      ({ temp: { max, min }, weather, dt, humidity }) => {
        const curData = dailyData[buttonCount];
        const wIcon = weather[0].icon;
        const wDesc = weather[0].description;
        const iconUrl = `${imgUrlBase}${wIcon}${imgUrlExt}`;
        const sDate = parseDate(convertUnixDate(dt));
        const curDay = addZero(sDate.day);
        const dayText = sDate.dayOfWeek;
        const testId = `button_${buttonCount}`;
        fcElmts.push(
          <CardWrapper
            data-testid={testId}
            onClick={() =>
              userSelectDay(curData, dt, testId, dayText, curDay)
            }
            tabIndex="0"
            role="button"
            isSelected={isSelected === dt}
            key={nanoid()}
            // dateselected = {dateselected === weatherInfo.daily[0].dt}
          >
            <p>
              {dayText} {curDay}
            </p>
            <TempWrapper>
              <p className="highTemp">{max.toFixed(1)}&deg;F</p>
              <p> / </p>
              <p className="lowTemp">{min.toFixed(1)}&deg;F</p>
            </TempWrapper>
            <img src={iconUrl} alt={wDesc} />
            <p>{wDesc}</p>
            <p>Humidity: {humidity}</p>
          </CardWrapper>,
        );
        buttonCount += 1; // add one to buttonCount for aria id
      },
    );
    return fcElmts;
  };

  return (
    <ForecastContainer>
      <WeekForecastWrapper>
        <TitleContainer>
          <p data-testid="forecast_title" key={nanoid()}>
            Eight Day Forecast in {curMonth}
          </p>
          <p>{title}</p>
        </TitleContainer>
        <CardContainer>{renderForecast()}</CardContainer>
      </WeekForecastWrapper>
      <DayWeather
        dayData={dayData}
        ariaTestId={ariaTestId}
        dayTitle={dayTitle}
      />
    </ForecastContainer>
  );
}

Forecast.propTypes = {
  dailyData: PropTypes.instanceOf(Object),
};

Forecast.defaultProps = {
  dailyData: {},
};

export default Forecast;
