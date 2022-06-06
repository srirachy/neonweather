import React, { useState, useEffect } from 'react';
import { getLocation } from '../services/API';

const Search = () => {
  const [curLoc, setCurLoc] = useState('san jose');

  useEffect(() => {
    const getLatLon = async () => {
      if (curLoc) {
        const loc = await getLocation(curLoc);
        console.log(loc);
      }
    };
    getLatLon();
  }, [curLoc]);
};

export default Search;
