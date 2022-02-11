import React from "react"

const Weather = (props) => {
  
  return (
    <div className="weather-block">
      <p className="weather-info">{props.forecast.city}</p>
      <p className="weather-info">{props.forecast.temp}°F</p>
      <p className="weather-info">{props.forecast.description}</p>
    </div>
  )
}

export default Weather
