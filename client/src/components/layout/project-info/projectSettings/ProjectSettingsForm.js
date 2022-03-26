import React, { useState } from "react"

const ProjectSettingsForm = (props) => {
  const [tempProjectSettings, setTempProjectSettings] = useState({
    name: props.project.name,
    description: props.project.description,
    customer: props.project.customer,
    quantity: props.project.quantity,
    hours: props.project.hours,
    id: props.projectId
  })

  const handleInputChange = event => {
    setTempProjectSettings({
      ...tempProjectSettings, 
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = () => {
    editProject(tempProjectSettings)
  }

  const editProject = async projectData => {
    try {
      const response = await fetch(`/api/v1/projects/edit-project`, {
        method: "POST",
        headers: new Headers ({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(projectData)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const body = await response.json()
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }


  return (
    <>
      <form className="project-settings-form">
        <label htmlFor="name" className="name">Name
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={tempProjectSettings.name}
          />
        </label>
        <label htmlFor="description" className="description">Description
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleInputChange}
            value={tempProjectSettings.description}
          />
        </label>
        <label htmlFor="customer" className="customer">Customer
          <input
            type="text"
            id="customer"
            name="customer"
            onChange={handleInputChange}
            value={tempProjectSettings.customer}
          />
        </label>
        <label htmlFor="quantity" className="quantity">Quantity
          <input
            type="number" min="1" max="999"
            id="quantity"
            name="quantity"
            onChange={handleInputChange}
            value={tempProjectSettings.quantity}
          />
        </label>
        <label htmlFor="hours" className="hours">Estimated Hours
          <input
            type="number" min="1" max="999"
            id="hours"
            name="hours"
            onChange={handleInputChange}
            value={tempProjectSettings.hours}
          />
        </label>
        <input 
          id="all-buttons"
          type="submit"
          onClick={handleSubmit}>
        </input>
        <button 
          id="all-buttons"
          onClick={props.handleShowProjectSettingsForm}
          >Cancel
        </button>
      </form>
    </>
  )
}

export default ProjectSettingsForm