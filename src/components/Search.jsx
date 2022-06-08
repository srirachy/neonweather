import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { nanoid } from 'nanoid';
import { getLocation } from '../services/API';
import LocationContext from '../utils/LocationContext';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

function Search() {
  const { curLoc, setCurLoc, setLat, setLng } =
    useContext(LocationContext);
  const [newLoc, setNewLoc] = useState('');

  // for userLoc, get city, state... for normal search, get city, state or country
  const getLocTitle = () => {};

  // declare formSubmit before useEffect below
  const formSubmit = (e) => {
    e.preventDefault();
    setCurLoc(newLoc);
    setNewLoc('');
  };

  // geocode success
  const showPosition = (position) => {
    const gLat = position.coords.latitude;
    const gLng = position.coords.longitude;
    setLat(gLat);
    setLng(gLng);
  };

  // geocode error
  const posError = () => {
    if (navigator.permissions) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((res) => {
          if (res.state === 'denied') {
            console.warn(
              'Enable location permissions for this website in your browser settings.',
            );
          }
        });
    } else {
      console.warn(
        'Unable to access your location. You can continue by submitting location manually.',
      );
    }
  };

  // get current location of user
  const getGeoLoc = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        showPosition,
        posError,
      );
    } else {
      console.log('Unavailable');
    }
  };

  const renderForm = () => {
    const formElmts = [];

    formElmts.push(
      <form id="search" key="userSubmit">
        <label htmlFor="search" onSubmit={formSubmit}>
          <input
            placeholder="Search Location"
            className="searchInput"
            type="text"
            value={newLoc}
            onChange={(e) => setNewLoc(e.target.value)}
          />
        </label>
      </form>,
    );

    formElmts.push(
      <StyledFontAwesomeIcon
        key={nanoid()}
        icon={faLocationCrosshairs}
        onClick={() => getGeoLoc()}
        data-testid="user_geoloc"
      />,
    );

    return formElmts;
  };

  // call getLocation to set lat and lng values
  useEffect(() => {
    const getLatLon = async () => {
      if (curLoc) {
        const loc = await getLocation(curLoc);
        if (loc.status === 'OK') {
          setLat(loc.results[0].geometry.location.lat);
          setLng(loc.results[0].geometry.location.lng);
          getLocTitle(loc);
          console.log(loc);
        } else {
          // do nothing for now
        }
      }
    };
    getLatLon();
  }, [curLoc, setLat, setLng]);

  // handle enter event key
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();

        formSubmit(event);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });

  return <FormWrapper>{renderForm()}</FormWrapper>;
}

export default Search;
