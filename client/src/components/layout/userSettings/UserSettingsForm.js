import React, { useState } from 'react'

const UserSettingsForm = props => {
  const [tempUserSettings, setTempUserSettings] = useState({
    woodWaste: props.user.woodWaste,
    markup: props.user.markup,
    laborRate: props.user.laborRate
  })

  const handleInputChange = event => {
    setTempUserSettings({
      ...tempUserSettings, 
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.handleUpdateUserSettingsOnSubmit(tempUserSettings)
    props.handleShowFormButtonClick()
  }
  
  return (
    <div>

      <form 
        className="user-settings-form"
        onSubmit={handleSubmit}
      >

        <label htmlFor="woodWaste" className="woodWaste">Wood Waste %
          <input 
            type="number" 
            min="0" 
            id="woodWaste"
            name="woodWaste"
            value={tempUserSettings.woodWaste}
            onChange={handleInputChange}>
          </input>
        </label>
        <label htmlFor="markup" className="markup"> Retail Markup %
          <input 
            type="number" 
            min="0" 
            id="markup"
            name="markup"
            value={tempUserSettings.markup}
            onChange={handleInputChange}>
          </input>
        </label>
        <label htmlFor="laborRate" className="laborRate">Hourly Labor Rate
          <input 
            type="number" 
            min="0" 
            id="laborRate"
            name="laborRate"
            value={tempUserSettings.laborRate}
            onChange={handleInputChange}>
          </input>
        </label>
        <button
          type="submit"
          id="user-settings-submit">
            Update Settings
        </button>

      </form>

    </div>
  )
}

export default UserSettingsForm