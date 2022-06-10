import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getForecast } from '../services/API';
import Forecast from '../components/Forecast';
import LocationContext from '../utils/LocationContext';
import WorldWeatherBar from '../components/WorldWeatherBar';

const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
`;

function Main() {
  const [dailyData, setDailyData] = useState([]);
  const [tokyoData, setTokyoData] = useState({});
  const [sfData, setSfData] = useState({});
  const [brazData, setBrazData] = useState({});
  const [nigData, setNigData] = useState({});
  const [ukData, setUkData] = useState({});
  const [sydData, setSydData] = useState({});
  const [ushData, setUshData] = useState({});
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

  // get weather data for world weather bar
  useEffect(() => {
    const getWorldData = async () => {
      const fetchTokyo = await getForecast('35.6762', '139.6503');
      setTokyoData(fetchTokyo.current);
      const fetchSf = await getForecast('37.7749', '122.4194');
      setSfData(fetchSf.current);
      const fetchBrazil = await getForecast('23.5558', '46.6396');
      setBrazData(fetchBrazil.current);
      const fetchNigeria = await getForecast('6.5244', '3.3792');
      setNigData(fetchNigeria.current);
      const fetchUk = await getForecast('51.5072', '0.1276');
      setUkData(fetchUk.current);
      const fetchSydney = await getForecast('33.8688', '151.2093');
      setSydData(fetchSydney.current);
      const fetchUshuaia = await getForecast('54.8019', '68.3030');
      setUshData(fetchUshuaia.current);
    };
    getWorldData();
  }, []);

  return (
    <MainWrapper>
      <WorldWeatherBar
        tokyoData={tokyoData}
        sfData={sfData}
        brazData={brazData}
        nigData={nigData}
        ukData={ukData}
        sydData={sydData}
        ushData={ushData}
      />
      <Forecast dailyData={dailyData} />
    </MainWrapper>
  );
}

export default Main;
