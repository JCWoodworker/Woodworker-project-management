import express from 'express'
import Project from '../../../models/Project.js'
import ProjectSerializer from '../../../../serializers/ProjectSerializer.js'
import cleanUserInput from '../../../../services/cleanUserInput.js'
import { ValidationError } from 'objection'


const projectsRouter = new express.Router()

projectsRouter.get('/', async (req, res) => {
  try {
    const projects = await Project.query()
    const serializedProjects = await projects.map(project => {
      return ProjectSerializer.getSummary(project)
    })
    return res.status(200).json({ projects: serializedProjects })
  } catch(error) {
    return res.status(500).json({ error: error })
  }

})

export default projectsRouter