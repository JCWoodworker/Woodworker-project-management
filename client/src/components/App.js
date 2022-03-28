import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import getCurrentUser from "../services/getCurrentUser"
import "../assets/scss/main.scss"
import RegistrationForm from "./registration/RegistrationForm"
import SignInForm from "./authentication/SignInForm"
import TopBar from "./layout/TopBar"
import HomePage from "./layout/HomePage"
import ProjectShow from "./layout/project-info/ProjectShow"
import HardwoodsIndex from "./layout/wood-info/HardwoodsIndex"
import DevInfoPage from "./layout/DevInfoPage"
import UserSettings from "./layout/userSettings/UserSettings"
import ProjectSettings from "./layout/project-info/projectSettings/ProjectSettings"
import CrmMainPage from "./customerRelationManagement/CrmMainPage"

const App = props => {
  const [currentUser, setCurrentUser] = useState(null)
  const [userSettings, setUserSettings] = useState(null)
  
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
      setUserSettings({
        id: user.id,
        woodWaste: user.woodWaste,
        markup: user.markup,
        laborRate: user.laborRate
      })
    } catch(err) {
      setCurrentUser(null)
    }
  }
    
  useEffect(() => {
    fetchCurrentUser()
  }, [])

  const handleUserSettingsFormSubmit = async newSettings => {
    try {
      const response = await fetch(`/api/v1/users/edit`, {
        method: "POST",
        headers: new Headers ({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newSettings)
    })
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw error
    } else {
      const body = await response.json()
      setUserSettings({
        id: body.user.id,
        woodWaste: body.user.woodWaste,
        markup: body.user.markup,
        laborRate: body.user.laborRate
      })
    }
    } catch (error) {
      console.error(`Error in fetch ${error.message}`)
    }
  }

  const showUserPage = () => {
    if (userSettings) {
      return (
        <ProjectShow
          userSettings={userSettings}
        />
      )
    }
    return <HomePage />
  }
  const showProjectSettingsPage = () => {
    if (currentUser) {
      return (
        <ProjectSettings />
      )
    }
    return <HomePage />
  }

  return (
    <div>
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
            <Route exact path="/projects/:id">
              {showUserPage}
            </Route>
            <Route exact path="/users/new" component={RegistrationForm} />
            <Route exact path="/user-sessions/new" component={SignInForm} />
            <Route exact path="/wood-info" component={HardwoodsIndex} />
            <Route exact path="/dev-info" component={DevInfoPage} />
            <Route exact path="/settings"> 
              <UserSettings 
                userSettings={userSettings} 
                handleUserSettingsFormSubmit={handleUserSettingsFormSubmit}
              />
            </Route>
            <Route exact path="/projectsettings">
              {showProjectSettingsPage}
            </Route>
            <Route exact path="/crm">
              <CrmMainPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )

}


export default hot(App)