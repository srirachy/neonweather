import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getForecast } from '../services/API';
import Forecast from '../components/Forecast';

const MainWrapper = styled.article`
  width: 100vw;
  height: 100vh;
`;

const ForecastWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 30%;
  margin: 0 auto;
  background-color: #aaa;
  .dataContainer {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .forecastContainer {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .dayCard {
    height: 100%;
    width: 11%;
    background-color: #abe;
    cursor: pointer;
  }
`;

function Main() {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  // const [allWeatherData, setAllWeatherData] = useState([]); // prolly wont need this
  const [dailyData, setDailyData] = useState([]);
  // const [curWeatherData, setCurWeatherData] = useState({});

  // set initial lat/lon
  useEffect(() => {
    setLat('34.0901');
    setLon('-118.4065');
  }, []);

  // get weather data via oneweather one call
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await getForecast(lat, lon);
      // setAllWeatherData(fetchedData);
      setDailyData(fetchedData.daily);
      // setCurWeatherData(fetchedData.current);
    };
    if (lat && lon) {
      getData();
    }
  }, [lat, lon]);

  return (
    <MainWrapper>
      <ForecastWrapper>
        <div className="dataContainer">
          <p>Daily Forecast</p>
          <div className="forecastContainer">
            <Forecast dailyData={dailyData} />
          </div>
        </div>
      </ForecastWrapper>
    </MainWrapper>
  );
}

export default Main;
