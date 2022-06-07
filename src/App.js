import React, { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './pages/Layout';
import LocationContext from './utils/LocationContext';

function App() {
  const weatherPath = '/weather_app';
  const [curLoc, setCurLoc] = useState('santa clara');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const value = useMemo(
    () => ({
      lat,
      setLat,
      lng,
      setLng,
      curLoc,
      setCurLoc,
    }),
    [lat, lng, curLoc],
  );

  return (
    <LocationContext.Provider value={value}>
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
