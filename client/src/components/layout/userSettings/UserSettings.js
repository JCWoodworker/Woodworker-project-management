import React, { useState } from 'react'
import UserSettingsForm from './UserSettingsForm'
import SignInForm from "../../authentication/SignInForm"

const UserSettings = ({ userSettings }) => {
  const [toggleShowEditForm, setToggleShowEditForm] = useState(false)
  
  const handleShowFormButtonClick = () => {
    toggleShowEditForm? setToggleShowEditForm(false) : setToggleShowEditForm(true)
  }

  const handleUserSettingsFormSubmit = async newSettings => {
    try {
      debugger
      const response = await fetch(`/api/v1/users/edit`, {
        method: "POST",
        headers: new Headers ({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newSettings)
    })
    if (!response.ok) {
      const errorMessage = `${resonse.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw error
    } else {
      const body = await response.json()
      debugger
      setSavedUserSettings(newSettings)
    }
    } catch (error) {
      console.error(`Error in fetch ${error.message}`)
    }
  }

  let showSettingsForm = null
  if (toggleShowEditForm) {
    showSettingsForm = 
      <UserSettingsForm 
        userSettings={userSettings}
        handleShowFormButtonClick={handleShowFormButtonClick}
        handleUserSettingsFormSubmit={handleUserSettingsFormSubmit}
      />
  }
  
  let showUserSettings = <SignInForm />
  if (userSettings) {
    showUserSettings = 
    <div>
      <h1 className="user-settings-heading">User Settings</h1>
      <p>Your Wood Waste Percentage = {userSettings.woodWaste}%</p>
      <p>Your Labor Rate = ${userSettings.laborRate}/hr</p>
      <p>Your Markup Percentage = {userSettings.markup}%</p>
      <button
        id="showUserSettingsFormButton"
        className="showUserSettingsFormButton"
        onClick={handleShowFormButtonClick}
      >
          Edit Settings
      </button>
    </div>
  }
  
  return (
    <div className="user-settings-container">
      <div>
        {showUserSettings}
      </div>
      <div>
        {showSettingsForm}
      </div>
    </div>
  )
}

export default UserSettings