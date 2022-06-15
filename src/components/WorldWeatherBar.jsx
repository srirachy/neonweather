import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import LocationContext from '../utils/LocationContext';

const BarContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 60px;
`;

const BarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const CityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 140px;
  height: 60px;
  cursor: pointer;
  font-size: 12px;
  margin: 0 auto;
  img {
    width: 30px;
    height: 30px;
  }
  &:hover {
    color: #abe;
  }
`;

const TempWrapper = styled.div``;

const CityNameWrapper = styled.div``;

function WorldWeatherBar({ worldData }) {
  const { setLat, setLng, setTitle } = useContext(LocationContext);

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
                <TempWrapper>
                  <p>{data.temp}&deg;F</p>
                  <img src={data.img} alt={data.desc} />
                </TempWrapper>
                <CityNameWrapper>
                  <p>{data.cityTitle}</p>
                </CityNameWrapper>
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
