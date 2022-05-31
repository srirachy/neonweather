const baseUrlOneCall = `https://api.openweathermap.org/data/3.0/onecall?`;
const wkey = process.env.REACT_APP_API_KEY_WEATHER;

export const getForecast = async (lat, lon) => {
  const res = await fetch(
    `${baseUrlOneCall}lat=${lat}&lon=${lon}&units=imperial&appid=${wkey}`,
  );
  return res.json();
};
