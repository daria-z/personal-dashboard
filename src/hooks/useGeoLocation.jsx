import { useState, useEffect } from "react";

export default function useGeolocation() {
  const [city, setCity] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(0);

  const refresh = () => {
    setCity(null);
    setLocation(null);
    setError(null);
    setTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Геолокация не поддерживается');
      return;
    }

    async function handleSuccess(position) {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });

      try {
        let response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`, {
          headers: { 'User-Agent': 'YourAppName' }
        });
        const data = await response.json();
        const city = data.address.city || data.address.town || data.address.village;
        setCity(city);
      } catch (error) {
        setError(error);
      }
    }

    function handleError(error) {
      setError(error.message);
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, [trigger]);
  return { city, location, error, refresh };
}
