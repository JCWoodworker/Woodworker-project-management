import express from "express"

import ProjectImage from "../../../models/ProjectImage.js"
import uploadImage from "../../../../services/uploadImage.js"

const projectImagesRouter = new express.Router()

projectImagesRouter.get("/", async (req, res) => {
  try {
    const projectImages = await ProjectImage.query()
    return res.status(200).json({ projectImages })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

projectImagesRouter.post("/", uploadImage.single("image"), async (req, res) => {
  try {
    const { body } = req
    const data = {
      ...body,
      image: req.file.location,
    }

    console.log(req.file.location)
    
    const projectImage = await ProjectImage.query().insertAndFetch(data)
    return res.status(201).json({ projectImage })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default projectImagesRouter
