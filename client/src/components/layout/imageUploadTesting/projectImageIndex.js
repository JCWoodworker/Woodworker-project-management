import React, { useEffect, useState } from "react"
import Dropzone from "react-dropzone"

import ProjectImageTile from "./ProjectImageTile"

const ProjectImageIndex = props => {
  const [projectImages, setProjectImages] = useState([])
  const [newProjectImageData, setnewProjectImageData] = useState({
    title: "",
    image: {}
  })
  
  const getProjectImages = async () => {
    try {
      const response = await fetch("/api/v1/projectImages")
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setProjectImages(body.projectImages)
    } catch (error) {
      console.error(`Error in getProjectImages Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getProjectImages()
  }, [])
  
  const projectImageTiles = projectImages.map(image => {
    return (
      <ProjectImageTile
        key={image.id}
        image={image}
      />
    )
  })

  const handleInputChange = (event) => {
    event.preventDefault()
    setnewProjectImageData({
      ...newProjectImageData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleImageUpload = (acceptedImage) => {
    setnewProjectImageData({
      ...newProjectImageData,
      image: acceptedImage[0]
    })
  }

  const addProjectImage = async (event) => {
    event.preventDefault()
    const newProjectImageBody = new FormData()
    newProjectImageBody.append("title", newProjectImageData.title)
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
    } catch (error) {
      console.error(`Error in addProjectImage Fetch: ${error.message}`)
    }
  }

  return (
    <div className="image-uploader-container">
      <h1>Project Images</h1>
      
      <div className="dropzone-drop-container">
      <form onSubmit={addProjectImage}>
        <div>
          <label htmlFor="title"> Title </label>
          <input 
            id="title"
            name="title"
            value={newProjectImageData.title}
            onChange={handleInputChange}
          />
        </div>

        <Dropzone onDrop={handleImageUpload} >
          {({getRootProps, getInputProps}) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop or click to upload</p>
              </div>
            </section>
          )}
        </Dropzone>

        <input className="button" type="submit" value="Add Image" />
      </form>
      </div>
      
      <div className="dropzone-images-container">
        {projectImageTiles}
      </div>
    </div>
  )
}

export default ProjectImageIndex