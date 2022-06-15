import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #abe;
  padding: 1rem 1.5rem;
  width: 100vw;
  overflow-x: hidden;
  h1 {
    color: #ffffff;
    &:hover {
      color: #ffe5cb;
    }
  }
`;

const NavWrapper = styled.nav``;

function NavBar() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>meowMeowMeow</h1>
      </Link>
      <NavWrapper>
        <Search />
      </NavWrapper>
    </HeaderWrapper>
  );
}

export default NavBar;
