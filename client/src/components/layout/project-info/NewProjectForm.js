import React, { useState } from "react"
import { Redirect } from "react-router-dom"

const NewProjectForm = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [newProjectId, setNewProjectId] = useState(null)
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    customer: "",
    quantity: "",
    hours: "",
    userId: props.userId
  })

  const handleInputChange = event => {
    setNewProject({ ...newProject, [event.currentTarget.name]: event.currentTarget.value })
  }

  const clearForm = () => {
    setNewProject({
      name: "",
      description: "",
      customer: "",
      quantity: "",
      hours: "",
      userId: ""
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const successfulPost = await props.postNewProject(newProject)
    setNewProjectId(successfulPost.id)
    if (successfulPost) {
      clearForm()
      setShouldRedirect(true)
    }
  }

  if (newProjectId) {
    if (shouldRedirect) {
      return <Redirect push to={`/projects/${newProjectId}`} />
    }
  }

  return (
    <>
      <h3 className="start-new-project-heading">Start A New Project:</h3>
      <form className="new-project-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="name">Name
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={newProject.name}
          />
        </label>
        <label htmlFor="description" className="description">Description
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleInputChange}
            value={newProject.description}
          />
        </label>
        <label htmlFor="customer" className="customer">Customer
          <input
            type="text"
            id="customer"
            name="customer"
            onChange={handleInputChange}
            value={newProject.customer}
          />
        </label>
        <label htmlFor="quantity" className="quantity">Quantity
          <input
            type="number" min="1" max="999"
            id="quantity"
            name="quantity"
            onChange={handleInputChange}
            value={newProject.quantity}
          />
        </label>
        <label htmlFor="hours" className="hours">Estimated Hours
          <input
            type="number" min="1" max="999"
            id="hours"
            name="hours"
            onChange={handleInputChange}
            value={newProject.hours}
          />
        </label>
        <input 
          id="all-buttons"
          type="submit">
        </input>
        <button 
          id="all-buttons"
          onClick={props.toggleShowNewProjectForm}>
            Cancel
        </button>
      </form>
    </>
  )
}

export default NewProjectForm