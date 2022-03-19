import React from "react"
import { Link } from "react-router-dom"

const ProjectTile = ({ project }) => {

  return (
    <>
      <Link to={`/projects/${project.id}`}>
        <div className="project-tile-container">
            <h4 className="project-name">{project.name}</h4>
          <div className="project-name-underline"></div>
          <p className="tile-info">Destination: {project.customer}</p>
          <p className="tile-info">Quantity: {project.quantity}</p>
        </div>
      </Link>
    </>
  )
}

export default ProjectTile