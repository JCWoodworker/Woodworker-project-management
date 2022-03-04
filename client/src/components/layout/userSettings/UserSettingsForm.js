import React from 'react'

const UserSettingsForm = props => {

  return (
    <>

      <form className="new-project-form">

        <label htmlFor="woodWaste">Wood Waste %
          <input type="number" min="0" id="woodWaste"></input>
        </label>
        <label htmlFor="markup"> Retail Markup %
          <input type="number" min="0" if="markup"></input>
        </label>
        <label htmlFor="laborRate">Hourly Labor Rate
          <input type="number" min="0" id="laborRate"></input>
        </label>
        <button type="submit">Update Settings</button>

      </form>

    </>
  )
}

export default UserSettingsForm