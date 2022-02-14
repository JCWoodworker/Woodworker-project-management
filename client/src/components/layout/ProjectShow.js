import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ProjectShow = props => {
  const [project, setProject] = useState ({
    name: "",
    customer: "",
    description: "",
    quantity: ""
  })

  const getProject = async () => {
    try {
      const response = await fetch(`/api/v1/projects/${props.match.params.id}`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setProject(body.project)
    } catch (error) {
      console.error(`Error in fetch: ${error}`)
    }
  }

  useEffect(() => {
    getProject()
  }, [])

  return (
    <div className="project-tile-container project-show">
      <h1>{project.name}</h1>
      <p>Customer: {project.customer}</p>
      <p>Description: {project.description}</p>
      <p>Order Quantity: {project.quantity}</p>
      <p>COMING SOON ...</p>
      <p>* Add Woods</p>
      <p>* View Estimated Cost</p>
      <p>* View Suggested Retail Pricing</p>
      <p>* Edit Project</p>
      <Link to='/' className="back-button">GO BACK TO ACTIVE PROJECTS</Link>
    </div>
  )
}

export default ProjectShow