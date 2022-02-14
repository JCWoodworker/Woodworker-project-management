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
import AuthenticatedHomePage from "./layout/AuthenticatedHomePage"
import ProjectShow from "./layout/ProjectShow"

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(null)
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
  
  return (
    <div>
      <Weather 
        forecast={forecast}
      />
      <div className="app-container">
        <Router>
          <TopBar 
            user={currentUser}
          />
          <Switch>
            <Route 
              exact path="/" 
              component={currentUser? AuthenticatedHomePage : HomePage}> 
            </Route>
            <Route 
              exact path="/projects/:id"
              component={currentUser? ProjectShow : HomePage }
              >
            </Route>
            <Route exact path="/users/new" component={RegistrationForm} />
            <Route exact path="/user-sessions/new" component={SignInForm} />
          </Switch>
        </Router>
      </div>
    </div>
  )

}

export default hot(App)
