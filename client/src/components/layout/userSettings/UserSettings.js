import React, { useState } from 'react'
import UserSettingsForm from './UserSettingsForm'
import SignInForm from "../../authentication/SignInForm"

const UserSettings = ({ user }) => {
  const [savedUserSettings, setSavedUserSettings] = useState({
    woodWaste: user.woodWaste,
    markup: user.markup,
    laborRate: user.laborRate
  })
  const [toggleShowEditForm, setToggleShowEditForm] = useState(false)
  
  const handleShowFormButtonClick = () => {
    toggleShowEditForm? setToggleShowEditForm(false) : setToggleShowEditForm(true)
  }

  // const handleUpdateUserSettingsOnSubmit = async newSettings => {
  //   try {
  //     const response = await fetch(`/api/v1/users/edit`, {
  //       method: "POST",
  //       headers: new Headers ({
  //         "Content-Type": "application/json",
  //       }),
  //       body: JSON.stringify(addWoodData)
  //   })
  //   if (!response.ok) {
  //     const errorMessage = `${resonse.status} (${response.statusText})`
  //     const error = new Error(errorMessage)
  //     throw error
  //   } else {
  //     const body = await response.json()
  //     setSavedUserSettings(newSettings)
  //     debugger
  //   }
  //   } catch (error) {
  //     console.error(`Error in fetch ${error.message}`)
  //   }
  // }

  let showSettingsForm = null
  if (toggleShowEditForm) {
    showSettingsForm = 
      <UserSettingsForm 
        user={user}
        handleShowFormButtonClick={handleShowFormButtonClick}
        // handleUpdateUserSettingsOnSubmit={handleUpdateUserSettingsOnSubmit}
      />
  }
  
  let showUserSettings = <SignInForm />
  if (user) {
    showUserSettings = 
    <div>
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