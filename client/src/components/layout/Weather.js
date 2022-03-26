import React, { useState, useEffect } from "react"

const Weather = props => {
  const [forecast, setForecast] = useState({
    city: "",
    temp: "",
    description: "",
    icon: ""
  })
  const [success, setSuccess] = useState(false)

  const getYourLocation = () => {
    window.navigator.geolocation.getCurrentPosition(successfulLookup, unsuccessfulLookup)
  }

  const successfulLookup = async yourLocation => {
    const lat = yourLocation.coords.latitude
    const long = yourLocation.coords.longitude
    try {
      const response = await fetch (`/api/v1/weather/${lat}&${long}`)
      const body = await response.json()
      setForecast({
        city: body.city,
        temp: body.temp,
        description: body.description,
        icon: body.icon
      })
      setSuccess(true)
    } catch(error) {
      console.error(error)
    }
  }

  const unsuccessfulLookup = () => {
    console.log('Cannot show weather ... location may be blocked, turned off, or you may not have access to the internet')
  }

  useEffect(() => {
    getYourLocation()
  }, [])

  let weatherHeading = 
    <div 
      className = "weather-block"
      forecast={forecast} >
      <p className="loading-weather loader">Loading Weather</p>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>  </div>
  if (success) {
    weatherHeading = (
      <div className="weather-block">
        <div className= "icon-temp">
          <img className="weather-icon" src={`http://openweathermap.org/img/w/${forecast.icon}.png`} />
          <p className="weather-info">{forecast.temp}°F in {forecast.city}</p>
        </div>
      </div>
    )
  } 
  
  return (
    <>
      {weatherHeading}
    </>
  )
}

export default Weather
