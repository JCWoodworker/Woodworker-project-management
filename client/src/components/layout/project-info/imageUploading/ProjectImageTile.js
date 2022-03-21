import React from "react"

const ProjectImageTile = ({ image }) => {

  return (
    <div className="dropzone-image-block">
      <img src={image.image} className="dropzone-image" />
      <p>{image.title}</p>
    </div>
  )
}

export default ProjectImageTile