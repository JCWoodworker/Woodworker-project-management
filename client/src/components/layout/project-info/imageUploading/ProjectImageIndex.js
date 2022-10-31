import React, { useEffect, useState } from "react"
import Dropzone from "react-dropzone"

import ProjectImageTile from "./ProjectImageTile"

const ProjectImageIndex = props => {
  const [projectImages, setProjectImages] = useState([])
  const [newProjectImageData, setNewProjectImageData] = useState({
    title: "",
    projectId: props.projectId, 
    image: {}
  })
  const [imageAddedToUpload, setImageAddedToUpload] = useState({
    message: "Click Here to Add an Image!",
    added: false,
    jsx: null
  })

  
  const getProjectImages = async () => {
    try {
      const response = await fetch(`/api/v1/projectImages/${props.projectId}`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setProjectImages(body.projectImages)
    } catch (error) {
      console.error(`Error in getProjectImages Fetch: ${error.message}`)
    }
  }

  const clearForm = () => {
    setNewProjectImageData({
      title: "",
      projectId: props.projectId, 
      image: {}
    })
  }

  useEffect(() => {
    getProjectImages()
  }, [])
  
  const handleInputChange = (event) => {
    event.preventDefault()
    setNewProjectImageData({
      ...newProjectImageData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleImageUpload = (acceptedImage) => {
    setImageAddedToUpload({
      message: "Image Loaded ... ",
      added: true
    })
    setNewProjectImageData({
      ...newProjectImageData,
      image: acceptedImage[0]
    })
  }

  const addProjectImage = async (event) => {
    event.preventDefault()
    const newProjectImageBody = new FormData()
    newProjectImageBody.append("title", newProjectImageData.title)
    newProjectImageBody.append("projectId", newProjectImageData.projectId)
    newProjectImageBody.append("image", newProjectImageData.image)
      
    try {
      const response = await fetch("/api/v1/projectImages", {
        method: "POST",
        headers: {
          "Accept": "image/jpeg"
        },
        body: newProjectImageBody
      })
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setProjectImages([
        ...projectImages,
        body.projectImage
      ])
      clearForm()
      setImageAddedToUpload({
        message: "Click Here to Add an Image!",
        added: false,
        jsx: null
      })
    } catch (error) {
      console.error(`Error in addProjectImage Fetch: ${error.message}`)
    }
  }

  const deleteProjectImage = async (imageIdToDelete) => {
    try {
      const response = await fetch("/api/v1/projectImages", {
        method: "DELETE",
        headers: new Headers ({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({imageId: imageIdToDelete})
      })
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const newProjectImageArray = projectImages.filter((image) => {
        return image.id != imageIdToDelete
      })
      setProjectImages(newProjectImageArray)
    } catch (error) {
      console.error(`Error in addProjectImage Fetch: ${error.message}`)
    }
  }

  const projectImageTiles = projectImages.map(image => {
    return (
      <ProjectImageTile
        key={image.id}
        image={image}
        deleteProjectImage={deleteProjectImage}
      />
    )
  })

  if (imageAddedToUpload.added) {
    imageAddedToUpload.jsx = 
      <form onSubmit={addProjectImage} className="dropzone-form">
        <div className="label-input-submit">
          <label htmlFor="title" className="title">Add a Caption?</label>
          <input 
            id="title"
            name="title"
            value={newProjectImageData.title}
            onChange={handleInputChange}
          />
          <input 
            className="button" 
            type="submit" 
            value="Upload to Project" 
          />
        </div>
      </form>
  }

  return (
    <div className="image-uploader-container">
      <h1>Project Images</h1>
      <div className="dropzone-drop-container">
        <div className="drop-button-and-message">
          <Dropzone onDrop={handleImageUpload} >
            {({getRootProps, getInputProps}) => (
                <button {...getRootProps()} id="all-buttons" className="dropzone-button">
                  <input {...getInputProps()} />
                  {imageAddedToUpload.message}
                </button>
            )}
          </Dropzone>
        </div>
        {imageAddedToUpload.jsx}
      </div>
      <div className="dropzone-images-container">
        {projectImageTiles}
      </div>
    </div>
  )
}

export default ProjectImageIndex