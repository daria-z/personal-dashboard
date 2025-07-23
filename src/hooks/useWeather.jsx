import { useState, useEffect } from 'react';

export default function useWeather() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(0);

  const refresh = () => {
    setWeather(null);
    setLocation(null);
    setError(null);
    setTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Геолокация не поддерживается');
      return;
    }

    const handleSuccess = async (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const handleError = (error) => {
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, [trigger]);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!location) return;

      try {
        let response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.latitude}&lon=${location.longitude}`,
          {
            headers: { 'User-Agent': 'YourAppName' },
          }
        );
        if (!response.ok) {
          throw new Error(`Nominatim HTTP ошибка: ${response.status}`);
        }
        const data = await response.json();
        const city =
          data.address.city || data.address.town || data.address.village;
        setCity(city);
      } catch (error) {
        setError(error);
      }

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`OpenWeatherMap HTTP: ${response.status}`);
        }
        const data = await response.json();
        if (data.weather && Array.isArray(data.weather)) {
          setWeather(data.weather[0]);
        } else {
          throw new Error('Неверный формат данных погоды');
        }
      } catch (error) {
        setError('Ошибка при получении данных погоды: ' + error.message);
      }
    };

    fetchWeather();
  }, [location]);

  return { weather, city, error, refresh };
}
