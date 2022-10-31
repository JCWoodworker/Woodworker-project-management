import React, { useState } from 'react'

const UserSettingsForm = props => {
  const [tempUserSettings, setTempUserSettings] = useState({
    id: props.userId,
    woodWaste: props.userSettings.woodWaste,
    markup: props.userSettings.markup,
    laborRate: props.userSettings.laborRate
  })

  const handleInputChange = event => {
    setTempUserSettings({
      ...tempUserSettings, 
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.handleUserSettingsFormSubmit(tempUserSettings)
    props.handleShowFormButtonClick()
  }
  
  return (
    <div className='user-settings-form-container'>

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
          id="all-buttons">
            Update Settings
        </button>

      </form>
      <p>* When saving woods to your project your boardfoot selections will automatically be adjusted based on your wood waste setting</p>
      <p>* Suggested sale price is (WOOD COST x MARKUP) + TOTAL LABOR COST</p>
    </div>
  )
}

export default UserSettingsForm