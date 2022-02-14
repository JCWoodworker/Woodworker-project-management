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

projectsRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const project = await Project.query().findById(id)
    return res.status(200).json({ project: project})
  } catch (error) {
    return res.status(404).json({ errors: error.data})
  }

})

export default projectsRouter