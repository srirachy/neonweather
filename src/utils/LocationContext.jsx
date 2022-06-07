import { createContext } from 'react';

const LocationContext = createContext({
  lat: '',
  setLat: () => {},
  lng: '',
  setLng: () => {},
  curLoc: '',
  setCurLoc: () => {},
});

export default LocationContext;
