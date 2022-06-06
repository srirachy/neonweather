const baseUrlOneCall = `https://api.openweathermap.org/data/3.0/onecall?`;
const wkey = process.env.REACT_APP_API_KEY_WEATHER;
const baseSearchCall = `http://api.openweathermap.org/geo/1.0/direct?q=`;

export const getForecast = async (lat, lon) => {
  const res = await fetch(
    `${baseUrlOneCall}lat=${lat}&lon=${lon}&units=imperial&appid=${wkey}`,
  );
  return res.json();
};

export const getLocation = async (search) => {
  const res = await fetch(
    `${baseSearchCall}${search}&limit=5&appid=${wkey}`,
  );
  return res.json();
};
