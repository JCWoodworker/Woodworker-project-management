import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import AddWoodForm from "./AddWoodForm"

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
    <div className="project-show">
      <div className="project-show-headers">
        <h1 className="page-heading">{project.name}</h1>
        <div className="customer-order">
          <p>Customer: {project.customer}</p>
          <p>Order Quantity: {project.quantity}</p>
        </div>
      </div>
      <h4 className="project-description"><strong>Description: </strong>{project.description}</h4>
      <div className="woods-metrics-container">
        <div className="show-metrics-container">
          <p>COMING SOON ...</p>
          <p>* View Estimated Cost</p>
          <p>* View Suggested Retail Pricing</p>
          <p>* Edit Project</p>
        </div>
        <div className="add-woods-container">
          <AddWoodForm />
        </div>
        <div className="show-added-wood">
          <p>Wood Added To Project:</p>
        </div>
      </div>
      <div className="back-button=container">
        <Link to='/' className="back-button">GO BACK</Link>
      </div>
    </div>
  )
}

export default ProjectShow
