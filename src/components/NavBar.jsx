import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { colors, flicker } from '../utils/NeonAnimations';
import { device } from '../utils/Device';
import Search from './Search';

const HeaderWrapper = styled.header`
  min-height: 15vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  h1 {
    width: 100%;
    font-size: 2.5rem;
    font-family: 'Secular One', sans-serif;
    color: ${colors.white};
    text-shadow: 0 0 7px ${colors.white}, 0 0 21px ${colors.white},
      0 0 42px ${colors.neon_green}, 0 0 82px ${colors.neon_green},
      0 0 92px ${colors.neon_green}, 0 0 102px ${colors.neon_green},
      0 0 151px ${colors.neon_green};
    &:hover {
      animation: ${flicker.neon_green} 2.5s infinite alternate;
    }
  }
  & > a {
    text-decoration: none;
  }

  @media ${device.tablet} {
    min-height: 5vh;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SearchWrapper = styled.nav`
  width: 100%;
  height: 2.5rem;
  margin: 0 auto;
  border: 0.2rem solid ${colors.white};
  border-radius: 2rem;
  padding: 0.3em;
  box-shadow: 0 0 0.2rem ${colors.white}, 0 0 0.2rem ${colors.white},
    0 0 2rem ${colors.neon_green}, 0 0 0.9rem ${colors.neon_green},
    0 0 2.8rem ${colors.neon_green},
    inset 0 0 1.3rem ${colors.neon_green};
  @media ${device.tablet} {
    width: 400px;
    margin: 9px 5px;
    padding: 0.4rem;
  }
`;
function NavBar() {
  const [showSearch, setShowSearch] = useState(true);
  const location = useLocation();
  const wPath = '/neonweather';

  // set boolean to hide or show search bar ft router useLocation
  useEffect(() => {
    if (location.pathname !== '/neonweather') {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [location]);

  return (
    <HeaderWrapper>
      <Link to={`${wPath}/`}>
        <h1>Neon Weather</h1>
      </Link>
      {showSearch && (
        <SearchWrapper>
          <Search />
        </SearchWrapper>
      )}
    </HeaderWrapper>
  );
}

export default NavBar;
