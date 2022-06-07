import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
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
  const [newLoc, setNewLoc] = useState('');
  const { curLoc, setCurLoc, setLat, setLng } =
    useContext(LocationContext);
  // call getLocation to set lat and lng values
  useEffect(() => {
    const getLatLon = async () => {
      if (curLoc) {
        const loc = await getLocation(curLoc);
        if (loc.status === 'OK') {
          setLat(loc.results[0].geometry.location.lat);
          setLng(loc.results[0].geometry.location.lng);
        } else {
          // do nothing for now
        }
      }
    };
    getLatLon();
  }, [curLoc, setLat, setLng]);

  // declare formSubmit before useEffect below
  const formSubmit = (e) => {
    e.preventDefault();
    setCurLoc(newLoc);
    setNewLoc('');
  };

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

  const renderForm = () => {
    const formElmts = [];

    formElmts.push(
      <form id="search">
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
      <StyledFontAwesomeIcon icon={faLocationCrosshairs} />,
    );

    return formElmts;
  };

  return <FormWrapper>{renderForm()}</FormWrapper>;
}

export default Search;
