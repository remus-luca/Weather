import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Belgrade</p>
          <p className="weather-description">sunny</p>
        </div>
        <img
          src={"/src/Icons/01d.png"}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <div className="temperature">18°C</div>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">22°C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
