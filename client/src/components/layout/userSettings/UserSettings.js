import React, { useState } from 'react'
import UserSettingsForm from './UserSettingsForm'
import SignInForm from "../../authentication/SignInForm"

const UserSettings = props => {
  const [toggleShowEditForm, setToggleShowEditForm] = useState(false)
  
  const handleShowFormButtonClick = () => {
    toggleShowEditForm? setToggleShowEditForm(false) : setToggleShowEditForm(true)
  }

  let showSettingsForm = null
  if (toggleShowEditForm) {
    showSettingsForm = 
      <UserSettingsForm
        userId={props.userSettings.id} 
        userSettings={props.userSettings}
        handleShowFormButtonClick={handleShowFormButtonClick}
        handleUserSettingsFormSubmit={props.handleUserSettingsFormSubmit}
      />
  }
  let showUserSettings = <SignInForm />
  if (props.userSettings) {
    showUserSettings = 
    <div>
      <h1 className="user-settings-heading">User Settings</h1>
      <p>Your Wood Waste Percentage = {props.userSettings.woodWaste}%</p>
      <p>Your Markup Percentage = {props.userSettings.markup}%</p>
      <p>Your Labor Rate = ${props.userSettings.laborRate}/hr</p>
      <button
        id="all-buttons"
        className="all-buttons"
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