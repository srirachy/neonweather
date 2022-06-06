import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getForecast } from '../services/API';
import Forecast from '../components/Forecast';
import Search from '../components/Search';

const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
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
      <Search />
      <Forecast dailyData={dailyData} />
    </MainWrapper>
  );
}

export default Main;
