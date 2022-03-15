import React, { useState } from 'react'
import UserSettingsForm from './UserSettingsForm'
import SignInForm from "../../authentication/SignInForm"

const UserSettings = props => {
  const [toggleShowEditForm, setToggleShowEditForm] = useState(false)
  // const [savedUserSettings, setSavedUserSettings] = useState({
  //   id: userSettings.id,
  //   wood: userSettings.woodWaste,
  //   labor: userSettings.laborRate,
  //   markup: userSettings.markup
  // })
  
  const handleShowFormButtonClick = () => {
    toggleShowEditForm? setToggleShowEditForm(false) : setToggleShowEditForm(true)
  }

  // const handleUserSettingsFormSubmit = async newSettings => {
  //   try {
  //     const response = await fetch(`/api/v1/users/edit`, {
  //       method: "POST",
  //       headers: new Headers ({
  //         "Content-Type": "application/json",
  //       }),
  //       body: JSON.stringify(newSettings)
  //   })
  //   if (!response.ok) {
  //     const errorMessage = `${resonse.status} (${response.statusText})`
  //     const error = new Error(errorMessage)
  //     throw error
  //   } else {
  //     const body = await response.json()
  //     setSavedUserSettings({
  //       wood: body.user.woodWaste,
  //       labor: body.user.laborRate,
  //       markup: body.user.markup
  //     })
  //   }
  //   } catch (error) {
  //     console.error(`Error in fetch ${error.message}`)
  //   }
  // }

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