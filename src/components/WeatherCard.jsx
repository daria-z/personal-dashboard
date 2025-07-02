import useGeolocation from '../hooks/useGeoLocation';
import useWeather from '../hooks/useWeather';

const WeatherCard = () => {
  const { city, location } = useGeolocation();
  const { weather } = useWeather(
    location && location.latitude,
    location && location.longitude
  );

  return (
    <div className="weather-card">
      <div className="card-header">
        <h3>Погода</h3>
        <div className="weater-display">
          <div className="weater-main">
            <div className="city">{city}</div>
            <div className="temp">температура</div>
            <div className="description">{weather?.main}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
