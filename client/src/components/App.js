import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import getCurrentUser from "../services/getCurrentUser"
import "../assets/scss/main.scss"
import RegistrationForm from "./registration/RegistrationForm"
import SignInForm from "./authentication/SignInForm"
import TopBar from "./layout/TopBar"
import HomePage from "./layout/HomePage"
import SponsorTile from "./layout/SponsorTile"
import Weather from "./layout/Weather"

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined)
  const [forecast, setForecast] = useState({})
  
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }
  
  const getYourLocation = () => {
    window.navigator.geolocation.getCurrentPosition(successfulLookup, console.log)
  }
  let locationConsent = true
  const successfulLookup = async yourLocation => {
    let latitude = 42.364758
    let longitude = -71.067421
    if (locationConsent) {
      latitude = yourLocation.coords.latitude
      longitude = yourLocation.coords.longitude
    }
    try {
      const response = await fetch (`/api/v1/weather/${latitude}&${longitude}`)
      const body = await response.json()
      setForecast({
        city: body.city,
        temp: body.temp,
        description: body.description
      })
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
    getYourLocation()
  }, [])

  return (
    <div>
      <div className="app-container">
        <Router>
          <TopBar 
            user={currentUser}
          />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users/new" component={RegistrationForm} />
            <Route exact path="/user-sessions/new" component={SignInForm} />
          </Switch>
        </Router>
      </div>
      <Weather
        forecast={forecast}
      />
    </div>
  )

}

export default hot(App)
