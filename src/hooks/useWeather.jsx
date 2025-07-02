import { useState, useEffect } from 'react';

export default function useWeather(latitude, longitude) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(0);

  const refresh = () => {
    setWeather(null);
    setError(null);
    setTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    if (latitude === null || longitude === null) return;
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`Open-Meteo HTTP ошибка: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setWeather(data.weather[0]);
      } catch (error) {
        setError('Ошибка при получении данных погоды: ' + error);
      }
    };
    fetchWeather();
  }, [latitude, longitude, trigger]);

  return { weather, error, refresh };
}
