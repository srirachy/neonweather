import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { colors, pulsate } from '../utils/NeonAnimations';
import { device } from '../utils/Device';
import LocationContext from '../utils/LocationContext';
import mainBkgd from '../img/main_bkgd.png';

const BarContainer = styled.div`
  max-width: 100%;
  height: 10%;
  margin: 0 auto;
  background-image: url(${mainBkgd});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
`;

const BarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  border: 0.2rem solid ${colors.white};
  padding: 0.3em;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 0.2rem ${colors.white}, 0 0 0.2rem ${colors.white},
    0 0 2rem ${colors.neon_violet}, 0 0 0.9rem ${colors.neon_violet},
    0 0 2.8rem ${colors.neon_violet},
    inset 0 0 1.3rem ${colors.neon_violet};
`;

const CityWrapper = styled.div`
  height: 50%;
  font-size: 0.5rem;
  margin: 5px 5px;
  display: flex;
  flex-direction: row;
  &:hover {
    cursor: pointer;
    p {
      animation: ${pulsate.neon_violet} 2.5s infinite alternate;
    }
  }
  @media ${device.laptop} {
    font-size: 1rem;
    margin: 5px 15px;
  }
  @media ${device.desktop} {
    margin: 5px 60px;
  }
`;
// animation: ${flicker.neon_pink} 2.5s infinite alternate;
const IconWrapper = styled.div`
  img {
    width: 1.2rem;
    height: 1.2rem;
  }
  @media ${device.laptop} {
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

const TextWrapper = styled.div`
  p {
    color: ${colors.white};
    text-shadow: 0 0 7px ${colors.white}, 0 0 10px ${colors.white},
      0 0 21px ${colors.white}, 0 0 42px ${colors.neon_violet},
      0 0 82px ${colors.neon_violet}, 0 0 92px ${colors.neon_violet},
      0 0 102px ${colors.neon_violet}, 0 0 151px ${colors.neon_violet};
  }
`;

function WorldWeatherBar({ worldData }) {
  const { setLat, setLng, setTitle } = useContext(LocationContext);

  // pass context state values to update forecast when user clicks on a city in weather bar
  const setEm = (curLat, curLng, curTitle) => {
    setLat(curLat);
    setLng(curLng);
    setTitle(curTitle);
  };

  return (
    <BarContainer>
      <BarWrapper>
        {Object.keys(worldData).length !== 0 &&
          worldData.map((data) => {
            return (
              // title, temp, img, desc
              <CityWrapper
                onClick={() =>
                  setEm(data.cityLat, data.cityLng, data.cityTitle)
                }
                tabIndex="0"
                role="button"
                key={nanoid()}
              >
                <IconWrapper>
                  <img src={data.img} alt={data.desc} />
                </IconWrapper>
                <TextWrapper>
                  <p>{data.temp.toFixed(1)}&deg;F</p>
                  <p>{data.cityTitle}</p>
                </TextWrapper>
              </CityWrapper>
            );
          })}
      </BarWrapper>
    </BarContainer>
  );
}

WorldWeatherBar.propTypes = {
  worldData: PropTypes.instanceOf(Object),
};

WorldWeatherBar.defaultProps = {
  worldData: {},
};

export default WorldWeatherBar;
