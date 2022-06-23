import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getForecast } from '../services/API';
import { createWeatherObj } from '../services/Functions';
import Forecast from '../components/Forecast';
import LocationContext from '../utils/LocationContext';
import WorldWeatherBar from '../components/WorldWeatherBar';

const MainWrapper = styled.main`
  max-width: 100vw;
  min-height: 95vh;
  padding: 1px;
  background-color: rgba(0, 0, 0, 0.75);
`;

function Main() {
  const [dailyData, setDailyData] = useState([]);
  const [worldData, setWorldData] = useState([]);
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

  // set weatherData to objects of weather for each major city from each continent
  useEffect(() => {
    const getWorldData = async () => {
      const cityData = [];
      const fetchTokyo = await getForecast('35.6762', '139.6503');
      cityData.push(
        createWeatherObj(
          fetchTokyo.current,
          'Tokyo, Japan',
          '35.6762',
          '139.6503',
        ),
      ); // create tokyo obj
      const fetchSf = await getForecast('37.7749', '122.4194');
      cityData.push(
        createWeatherObj(
          fetchSf.current,
          'San Francisco, CA',
          '37.7749',
          '122.4194',
        ),
      ); // create sf obj
      const fetchBrazil = await getForecast('23.5558', '46.6396');
      cityData.push(
        createWeatherObj(
          fetchBrazil.current,
          'São Paulo, Brazil',
          '23.5558',
          '46.6396',
        ),
      ); // create san paulo obj
      const fetchNigeria = await getForecast('6.5244', '3.3792');
      cityData.push(
        createWeatherObj(
          fetchNigeria.current,
          'Lagos, Nigeria',
          '6.5244',
          '3.3792',
        ),
      ); // create nigeria obj
      const fetchUk = await getForecast('51.5072', '0.1276');
      cityData.push(
        createWeatherObj(
          fetchUk.current,
          'UK, London',
          '51.5072',
          '0.1276',
        ),
      ); // create uk obj
      const fetchSydney = await getForecast('33.8688', '151.2093');
      cityData.push(
        createWeatherObj(
          fetchSydney.current,
          'Sydney, Australia',
          '33.8688',
          '151.2093',
        ),
      ); // create sydney obj
      const fetchUshuaia = await getForecast('54.8019', '68.3030');
      cityData.push(
        createWeatherObj(
          fetchUshuaia.current,
          'Ushuaia, Argentina',
          '54.8019',
          '68.3030',
        ),
      ); // create ushuaia obj
      setWorldData(cityData);
    };
    getWorldData();
  }, []);

  return (
    <MainWrapper>
      <WorldWeatherBar worldData={worldData} />
      <Forecast dailyData={dailyData} />
    </MainWrapper>
  );
}

export default Main;
