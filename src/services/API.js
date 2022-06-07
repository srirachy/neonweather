const wkey = process.env.REACT_APP_API_KEY_WEATHER;
const gkey = process.env.REACT_APP_API_KEY_GEOCODE;
const baseWeatherCallOne = `https://api.openweathermap.org/data/3.0/onecall?`;
const baseWeatherCallTwo = `&units=imperial&appid=${wkey}`;
const baseGeoCallOne = `https://maps.googleapis.com/maps/api/geocode/json?address=`;
const baseGeoCallTwo = `&key=${gkey}`;

export const getForecast = async (lat, lon) => {
  const res = await fetch(
    `${baseWeatherCallOne}lat=${lat}&lon=${lon}${baseWeatherCallTwo}`,
  );
  return res.json();
};

export const getLocation = async (search) => {
  const res = await fetch(
    `${baseGeoCallOne}${search}${baseGeoCallTwo}`,
  );
  return res.json();
};
