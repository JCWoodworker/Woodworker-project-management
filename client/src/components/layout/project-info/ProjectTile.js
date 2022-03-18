import React from "react"
import { Link } from "react-router-dom"

const ProjectTile = ({ project, deleteProject }) => {

  const handleButtonClick = () => {
    deleteProject(project.id)
  }

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
        <button 
          id="all-buttons"
          onClick={handleButtonClick}
        >X</button>
    </>
  )
}

export default ProjectTile