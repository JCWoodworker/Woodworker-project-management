import React from "react";

const ProjectTile = props => {

  return (
    <div className="project-tile-container">
      <h4 className="project-name">{props.project.name}</h4>
      <div className="project-name-underline"></div>
      <p className="tile-info">Destination: {props.project.customer}</p>
      <p className="tile-info">Quantity: {props.project.quantity}</p>
    </div>
  )
}

export default ProjectTile