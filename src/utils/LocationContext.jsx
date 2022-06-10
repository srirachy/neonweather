import { createContext } from 'react';

const LocationContext = createContext({
  lat: '',
  setLat: () => {},
  lng: '',
  setLng: () => {},
  curLoc: '',
  setCurLoc: () => {},
  title: '',
  setTitle: () => {},
});

export default LocationContext;
