import express from "express"

import Project from "../../../models/Project.js"
import ProjectImage from "../../../models/ProjectImage.js"
import uploadImage from "../../../../services/uploadImage.js"

const projectImagesRouter = new express.Router()

projectImagesRouter.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const project = await Project.query().findById(id)
    const projectImages = await project.$relatedQuery("projectImages")
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

projectImagesRouter.delete("/", async (req, res) => {
  try {
    const imageId = req.body.imageId
    await ProjectImage.query().deleteById(imageId)
    return res.status(201).json( "image deleted" )
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default projectImagesRouter
