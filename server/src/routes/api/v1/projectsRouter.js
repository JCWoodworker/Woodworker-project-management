import express from 'express'
import Project from '../../../models/Project.js'
import ProjectSerializer from '../../../../serializers/ProjectSerializer.js'
import cleanUserInput from '../../../../services/cleanUserInput.js'
import { ValidationError } from 'objection'
import { User } from '../../../models/index.js'


const projectsRouter = new express.Router()

projectsRouter.get('/users/:user', async (req, res) => {
  try {
    const currentUser = req.params.user
    const user = await User.query().findById(currentUser)
    user.projects = await user.$relatedQuery("projects")
    const serializedProjects = await user.projects.map(project => {
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

projectsRouter.post('/new-project/:user', async (req, res) => {
  const formInput = cleanUserInput(req.body)
  formInput.userId = req.params.user 
  debugger
  try {
    const newProject = await Project.query().insertAndFetch(formInput)
    debugger
    return res.status(201).json({ project: newProject })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default projectsRouter