import React from "react"

const ProjectImageTile = props => {

  const handleDeleteImage = () => {
    props.deleteProjectImage(props.image.id)
  }

  return (
    <div className="dropzone-image-block">
      <img src={props.image.image} className="dropzone-image" />
      <p>{props.image.title}</p>
      <button 
        id="delete-image-button"
        onClick={handleDeleteImage}>
          ❌
      </button>
    </div>
  )
}

export default ProjectImageTile