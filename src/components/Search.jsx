import React, { useState, useEffect } from 'react';
import { getLocation } from '../services/API';

const Search = () => {
  const [curLoc, setCurLoc] = useState('statue of liberty');

  useEffect(() => {
    const getLatLon = async () => {
      if (curLoc) {
        const loc = await getLocation(curLoc);
        console.log(loc.results[0].geometry.location.lat);
        console.log(loc.results[0].geometry.location.lng);
      }
    };
    getLatLon();
  }, [curLoc]);
};

export default Search;
