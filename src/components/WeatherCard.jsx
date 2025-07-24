import useWeather from '../hooks/useWeather';

const WeatherCard = () => {
  const { temp, weather, city } = useWeather();
  const iconCode = weather?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

  return (
    <div className="weather-card">
      <div className="card-header">
        <h3>Погода</h3>
        <div className="weater-display">
          <div className="weater-main">
            <div className="city">{city}</div>
            <div className="temp">{`температура ${temp}`}</div>
            <img src={iconUrl} alt="Weather icon" />
            <div className="description">{weather?.description}</div>
            {console.log(temp)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
