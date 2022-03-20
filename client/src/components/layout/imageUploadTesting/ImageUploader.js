import React, { useState } from "react"
import { useDropzone } from "react-dropzone"

const ImageUploader = props => {

  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      )
    }
  })

  const images = files.map(file => {
    return (
      <div key={file.name}>
        <img className="dropzone-image"src={file.preview} />
      </div>  
    )
  })

  return (
    <div className="image-uploader-container">
      <h1>Project Images</h1>
      <div {...getRootProps()} className="dropzone-drop-container">
        <input {...getInputProps()} />
        <p>Drop Image Here</p>
        <p>(Or click to upload)</p>
      </div>
      <div>
        <p>{images}</p>
      </div>
    </div>
  )
}

export default ImageUploader