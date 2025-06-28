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
    async function fetchWeather() {
      try {
        console.log(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&hourly=temperature_2m,precipitation&lang=ru`
        );
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&hourly=temperature_2m,precipitation&lang=ru`
        );
        if (!response.ok) {
          throw new Error(`Open-Meteo HTTP ошибка: ${response.status}`);
        }
        const data = await response.json();

        setWeather(data.current.weather_code);
      } catch (error) {
        setError('Ошибка при получении данных погоды: ' + error);
      }
    }
    fetchWeather();
  }, [latitude, longitude, trigger]);

  return { weather, error, refresh };
}
