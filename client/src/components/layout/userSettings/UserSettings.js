import React, { useState } from 'react'
import UserSettingsForm from './UserSettingsForm'
import SignInForm from "../../authentication/SignInForm"

const UserSettings = ({ user }) => {
  const [savedUserSettings, setSavedUserSettings] = useState({
    woodWaste: user.woodWaste,
    markup: user.markup,
    laborRate: user.laborRate
  })

  let showSettingsForm = <UserSettingsForm user={user} />
  const handleShowFormButtonClick = () => {
    alert("you clicked edit")
  }
  
  let showUserSettings = <SignInForm />
  if (user) {
    showUserSettings = 
    <div className="user-settings-container">
        <h1 className="user-settings-heading">User Settings</h1>
        <p>Your Wood Waste Percentage = {savedUserSettings.woodWaste}%</p>
        <p>Your Labor Rate = ${savedUserSettings.laborRate}/hr</p>
        <p>Your Markup Percentage = {savedUserSettings.markup}%</p>
        <button
          id="showUserSettingsFormButton"
          className="showUserSettingsFormButton"
          onClick={handleShowFormButtonClick}
        >
            Edit Settings
        </button>
        {showSettingsForm}
      </div>
  }
  
  return (
    <>
      {showUserSettings}
    </>
  )
}

export default UserSettings