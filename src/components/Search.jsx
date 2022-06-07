import React, { useState, useEffect, useContext } from 'react';
import { getLocation } from '../services/API';
import LocationContext from '../utils/LocationContext';

const Search = () => {
  const { curLoc, setCurLoc, setLat, setLng } =
    useContext(LocationContext);
  // call getLocation to set lat and lng values
  useEffect(() => {
    const getLatLon = async () => {
      if (curLoc) {
        const loc = await getLocation(curLoc);
        // console.log(loc);
        if (loc.status === 'OK') {
          // console.log(loc.results[0].geometry.location.lat);
          // console.log(loc.results[0].geometry.location.lng);
          setLat(loc.results[0].geometry.location.lat);
          setLng(loc.results[0].geometry.location.lng);
        } else {
          // do nothing for now
        }
      }
    };
    getLatLon();
  }, [curLoc, setLat, setLng]);
};

export default Search;
