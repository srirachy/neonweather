import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LocationContext from '../utils/LocationContext';

const BarContainer = styled.div``;

const MiniWrapper = styled.div``;

const DataWrapper = styled.div``;

function WorldWeatherBar({
  tokyoData,
  sfData,
  brazData,
  nigData,
  ukData,
  sydData,
  ushData,
}) {
  const { setLat, setLng, setTitle } = useContext(LocationContext);

  const renderCities = () => {
    // icon, weather, name
    const imgUrlBase = 'http://openweathermap.org/img/wn/';
    const imgUrlExt = '.png';
    const tokyoImg = `${imgUrlBase}${tokyoData.weather[0].icon}${imgUrlExt}`;
    const cityElmts = [];
    cityElmts.push(
      <DataWrapper>
        <p>{tokyoData.temp}&deg;F</p>
        <img src={tokyoImg} alt={tokyoData.weather[0].description} />
        <p>Tokyo, Japan</p>
      </DataWrapper>,
    );
    // cityElmts.push();
    // console.log(tokyoData);
    // console.log(sfData);
    // console.log(brazData);
    // console.log(nigData);
    // console.log(ukData);
    // console.log(sydData);
    // console.log(ushData);

    return cityElmts;
  };
  return (
    <BarContainer>
      <MiniWrapper>
        {Object.keys(tokyoData).length !== 0 && renderCities()}
      </MiniWrapper>
    </BarContainer>
  );
}

WorldWeatherBar.propTypes = {
  tokyoData: PropTypes.instanceOf(Object),
  sfData: PropTypes.instanceOf(Object),
  brazData: PropTypes.instanceOf(Object),
  nigData: PropTypes.instanceOf(Object),
  ukData: PropTypes.instanceOf(Object),
  sydData: PropTypes.instanceOf(Object),
  ushData: PropTypes.instanceOf(Object),
};

WorldWeatherBar.defaultProps = {
  tokyoData: {},
  sfData: {},
  brazData: {},
  nigData: {},
  ukData: {},
  sydData: {},
  ushData: {},
};

export default WorldWeatherBar;
