import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
  
  let editSettingsButton = (
    <>
      <button
        id="all-buttons"
        className="all-buttons"
        onClick={handleShowFormButtonClick}
      >
        Edit Settings
      </button>
    </>
  )

  if (toggleShowEditForm) {
    editSettingsButton = null
  }
  
  let showUserSettings = <SignInForm />
  if (props.userSettings) {
    showUserSettings = 
    <div className='main-user-settings'>
      <h1 className="user-settings-heading">User Settings</h1>
      <p>Wood Waste = {props.userSettings.woodWaste}%</p>
      <p>Retail Markup = {props.userSettings.markup}%</p>
      <p>Labor Rate = ${props.userSettings.laborRate}/hr</p>
      {editSettingsButton}
      <Link to='/'>
        <button 
          id="all-buttons">
          Back To Projects
        </button>
      </Link>
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