import React, { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './pages/Layout';
import LocationContext from './utils/LocationContext';
import GlobalStyle from './utils/GlobalStyle';

function App() {
  // const weatherPath = '/weather_app';
  const [curLoc, setCurLoc] = useState('santa clara'); // default location
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [title, setTitle] = useState('');
  const value = useMemo(
    () => ({
      lat,
      setLat,
      lng,
      setLng,
      curLoc,
      setCurLoc,
      title,
      setTitle,
    }),
    [lat, lng, curLoc, title],
  );

  return (
    <LocationContext.Provider value={value}>
      <GlobalStyle />
      <Routes>
        {/* <Route path={`${weatherPath}/`} element={<Layout />}> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </LocationContext.Provider>
  );
}

export default App;
