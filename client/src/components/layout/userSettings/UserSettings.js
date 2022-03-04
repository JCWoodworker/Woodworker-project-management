import React, { useState } from 'react'
import UserSettingsForm from './UserSettingsForm'
import SignInForm from "../../authentication/SignInForm"

const UserSettings = ({ user }) => {

  
  console.log(user)

  let showUserSettings = <SignInForm />
  if (user) {
    showUserSettings = 
      <>
        <h1>Future Home of User Settings</h1>
        {/* <p>{props.user.woodWaste}</p>
        <p>{props.user.markup}</p>
        <p>{props.user.laborRate}</p> */}
        <UserSettingsForm
          user={user}
        />
      </>
  }

  return (
    <>
      {showUserSettings}
    </>
  )
}

export default UserSettings