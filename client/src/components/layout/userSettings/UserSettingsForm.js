import React, { useState } from 'react'

const UserSettingsForm = props => {
  const [userSettings, setUserSettings] = useState({
    woodWaste: "",
    markup: "",
    laborRate: ""
  })

  const handleInputChange = event => {
    setUserSettings({
      ...userSettings, 
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (
    <>

      <form>

        <label htmlFor="woodWaste">Wood Waste %
          <input 
            type="number" 
            min="0" 
            id="woodWaste"
            name="woodWaste"
            value={userSettings.woodWaste}
            onChange={handleInputChange}>
          </input>
        </label>
        <label htmlFor="markup"> Retail Markup %
          <input 
            type="number" 
            min="0" 
            id="markup"
            name="markup"
            value={userSettings.markup}
            onChange={handleInputChange}>
          </input>
        </label>
        <label htmlFor="laborRate">Hourly Labor Rate
          <input 
            type="number" 
            min="0" 
            id="laborRate"
            name="laborRate"
            value={userSettings.laborRate}
            onChange={handleInputChange}>
          </input>
        </label>
        <button type="submit">Update Settings</button>

      </form>

    </>
  )
}

export default UserSettingsForm