import React from "react"

const Weather = props => {
  
  return (
    <div className="weather-block">
      <div className= "icon-temp">
        <img className="weather-icon" src={`http://openweathermap.org/img/w/${props.forecast.icon}.png`} />
        <p className="weather-info">{props.forecast.temp}°F in {props.forecast.city}</p>
      </div>
    </div>
  )
}

export default Weather
