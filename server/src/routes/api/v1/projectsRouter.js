import express from 'express'
import { Project } from '../../../models'

const projectsRouter = new express.Router()

projectsRouter.get('/', async (req, res) => {
  try {
    const response = await Project.query()
    const body = response.json()
    
  } catch(error) {
    return res.status(500).json({ error: error })
  }

})

export default projectsRouter