import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getForecast } from '../services/API';
import Forecast from '../components/Forecast';
import LocationContext from '../utils/LocationContext';

const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
`;

function Main() {
  // const [loc, setLoc] = useState('');
  // const [allWeatherData, setAllWeatherData] = useState([]); // prolly wont need this
  const [dailyData, setDailyData] = useState([]);
  const { lat, lng } = useContext(LocationContext);
  // const [curWeatherData, setCurWeatherData] = useState({});

  // set initial lat/lon
  // useEffect(() => {
  //   setLat('34.0901');
  //   setLng('-118.4065');
  // }, [setLat, setLng]);

  // get weather data via oneweather one call
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await getForecast(lat, lng);
      // setAllWeatherData(fetchedData);
      setDailyData(fetchedData.daily);
      // setCurWeatherData(fetchedData.current);
    };
    if (lat && lng) {
      getData();
    }
  }, [lat, lng]);

  return (
    <MainWrapper>
      <Forecast dailyData={dailyData} />
    </MainWrapper>
  );
}

export default Main;
