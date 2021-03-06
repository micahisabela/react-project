import React from "react";
import FormattedDate from "./FormattedDate";
import CurrentWeatherIcon from "./CurrentWeatherIcon";
import TemperatureUnit from "./TemperatureUnit";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="card mb-3 border-dark">
        <FormattedDate date={props.data.date} />
        <h1 className="card-title">
          Currently in <br />
          <span className="city">{props.data.city}</span>
        </h1>
        <p>
          <CurrentWeatherIcon
            code={props.data.weatherIconCode}
            alt={props.data.description}
          />
        </p>
        <div className="card-body">
          <p className="card-text">
            <span className="current-weather text-capitalize">
              {props.data.description}
            </span>
            <span className="current-weather">, </span>
            <TemperatureUnit temperature={props.data.temperature} />
            Humidity:{" "}
            <span className="current-weather">{props.data.humidity}</span>
            <span className="current-weather">%</span>
            <br />
            Wind:{" "}
            <span className="current-weather">
              {Math.round(props.data.wind)}
            </span>
            <span className="current-weather"> mph</span>
          </p>
        </div>
      </div>
    </div>
  );
}
