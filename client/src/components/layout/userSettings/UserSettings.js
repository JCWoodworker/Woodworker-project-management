import React, { useState } from 'react'
import UserSettingsForm from './UserSettingsForm'

const UserSettings = ({ user }) => {

  
  console.log(user)

  return (
    <>
      <h1>Future Home of User Settings</h1>
      {/* <p>{props.user.woodWaste}</p>
      <p>{props.user.markup}</p>
      <p>{props.user.laborRate}</p> */}
      <UserSettingsForm
        user={user}
      />
    </>
  )
}

export default UserSettings