const wkey = process.env.REACT_APP_API_KEY_WEATHER;
const gkey = process.env.REACT_APP_API_KEY_GEOCODE;
const baseWeatherCall = `https://api.openweathermap.org/data/2.5/onecall?`;
const endWeatherCall = `&units=imperial&appid=${wkey}`;
const baseGeoCall = `https://maps.googleapis.com/maps/api/geocode/json?address=`;
const baseReverseGeoCall = `https://maps.googleapis.com/maps/api/geocode/json?latlng=`;
const endGeoCall = `&key=${gkey}`;

export const getForecast = async (lat, lon) => {
  const res = await fetch(
    `${baseWeatherCall}lat=${lat}&lon=${lon}${endWeatherCall}`,
  );
  return res.json();
};

export const getLocation = async (search) => {
  const res = await fetch(`${baseGeoCall}${search}${endGeoCall}`);
  return res.json();
};

export const getReverseGeo = async (lat, lon) => {
  const res = await fetch(
    `${baseReverseGeoCall}${lat},${lon}${endGeoCall}`,
  );
  return res.json();
};
