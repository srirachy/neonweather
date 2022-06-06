import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './pages/Layout';

function App() {
  const weatherPath = '/weather_app';
  return (
    <Routes>
      <Route path={`${weatherPath}/`} element={<Layout />} />
      <Route index element={<Main />} />
    </Routes>
  );
}

export default App;
