import React, { useState } from "react"
import { Redirect } from "react-router-dom"

const NewProjectForm = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [newProjectId, setNewProjectId] = useState(null)
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    customer: "",
    quantity: ""
  })

  const handleInputChange = event => {
    setNewProject({ ...newProject, [event.currentTarget.name]: event.currentTarget.value })
  }

  const clearForm = () => {
    setNewProject({
      name: "",
      description: "",
      customer: "",
      quantity: ""
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
      <h3 className="new-project-heading">Start A New Project:</h3>
      <form className="new-project-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={newProject.name}
          />
        </label>
        <label htmlFor="description">Description
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleInputChange}
            value={newProject.description}
          />
        </label>
        <label htmlFor="customer">Customer
          <input
            type="text"
            id="customer"
            name="customer"
            onChange={handleInputChange}
            value={newProject.customer}
          />
        </label>
        <label htmlFor="quantity">Quantity
          <input
            type="number" min="1" max="100"
            id="quantity"
            name="quantity"
            onChange={handleInputChange}
            value={newProject.quantity}
          />
        </label>
        <input className="submit-button" type="submit"></input>
      </form>
    </>
  )
}

export default NewProjectForm