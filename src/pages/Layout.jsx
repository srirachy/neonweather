import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import GlobalStyle from '../utils/GlobalStyle';

function Layout() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;
