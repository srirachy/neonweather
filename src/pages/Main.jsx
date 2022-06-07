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
  const [dailyData, setDailyData] = useState([]);
  const { lat, lng } = useContext(LocationContext);

  // get weather data via oneweather one call
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await getForecast(lat, lng);
      setDailyData(fetchedData.daily);
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
