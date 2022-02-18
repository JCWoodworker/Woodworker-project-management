import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import getCurrentUser from "../services/getCurrentUser"
import "../assets/scss/main.scss"
import RegistrationForm from "./registration/RegistrationForm"
import SignInForm from "./authentication/SignInForm"
import TopBar from "./layout/TopBar"
import HomePage from "./layout/HomePage"
import Weather from "./layout/Weather"
import ProjectShow from "./layout/project-info/ProjectShow"
import HardwoodsIndex from "./layout/wood-info/HardwoodsIndex"
import DevInfoPage from "./layout/DevInfoPage"

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [forecast, setForecast] = useState({})
  const [success, setSuccess] = useState(false)
  
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }
  
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
    console.log('Location blocked.  Please allow this site to use your location for local weather')
  }

  
  useEffect(() => {
    fetchCurrentUser()
    getYourLocation()
  }, [])

  let weatherHeading = 
    <div 
      className = "weather-block"
      forecast={forecast} >
      <p className="loading-weather loader">Loading Weather</p>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>  </div>
  if (success) {
    weatherHeading = <Weather forecast={forecast} />
  }

  return (
    <div>
      {weatherHeading}
      <div className="app-container">
        <Router>
          <TopBar 
            user={currentUser}
          />
          <Switch>
            <Route 
              exact path="/">
                <HomePage user={currentUser} />
            </Route>
            <Route 
              exact path="/projects/:id"
              component={currentUser? ProjectShow : HomePage }
              >
            </Route>
            <Route exact path="/users/new" component={RegistrationForm} />
            <Route exact path="/user-sessions/new" component={SignInForm} />
            <Route exact path="/wood-info" component={HardwoodsIndex} />
            <Route exact path="/dev-info" component={DevInfoPage} />
          </Switch>
        </Router>
      </div>
      <div className="footer-container"></div>
    </div>
  )

}

export default hot(App)
