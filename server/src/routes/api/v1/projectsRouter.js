import express from 'express'
import cleanUserInput from '../../../../services/cleanUserInput.js'
import { ValidationError } from 'objection'
import { User, ProjectWood, Project } from '../../../models/index.js'

import ProjectSerializer from '../../../../serializers/ProjectSerializer.js'

const projectsRouter = new express.Router()


projectsRouter.get('/', async (req, res) => {
  try {
    const currentUser = req.user.id
    const user = await User.query().findById(currentUser)
    user.projects = await user.$relatedQuery("projects")
    const serializedProjects = await Promise.all(
      user.projects.map( async (project) => {
      return await ProjectSerializer.getSummary(project)
      })
    )
    return res.status(200).json({ projects: serializedProjects })
  } catch(error) {
    return res.status(500).json({ error: error })
  }
})

projectsRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const project = await Project.query().findById(id)
    const serializedProject = await ProjectSerializer.getSummary(project)
    return res.status(200).json({ project: serializedProject})
  } catch (error) {
    return res.status(404).json({ errors: error.data})
  }
})

projectsRouter.delete('/', async (req, res) => {
  const id = parseInt(req.body.projectId)
  try {
    
    await Project.query().deleteById(id)
    return res.status(201).json({ message: "Successfully Deleted" })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

projectsRouter.post('/new-project/', async (req, res) => {
  const formInput = cleanUserInput(req.body) 
  try {
    const newProject = await Project.query().insertAndFetch(formInput)
    return res.status(201).json({ project: newProject })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})
  
projectsRouter.post('/add-woods', async (req, res) => {
  try {
    const allAddedWoods = await Promise.all(
      req.body.map(async (wood) => {
        const newWood = await ProjectWood.query().insert(wood)
        return newWood
      }) 
    )
    const project = await Project.query().findById(allAddedWoods[0].projectId)
    const serializedProject = await ProjectSerializer.getSummary(project)
    return res.status(201).json({ project: serializedProject })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

projectsRouter.delete('/delete-woods', async (req, res) => {
  try {
    await ProjectWood.query().findOne({
      hardwoodId:req.body.hardwoodId,
      projectId: req.body.projectId
    }).delete()
    return res.status(201).json({ message: 'Successfully Deleted' })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

projectsRouter.post('/edit-project', async (req, res) => {
  const { name, description, customer, hours, quantity, id} = req.body
  try {
    const projectToEdit = 
      await Project
        .query()
          .patchAndFetchById(
            id, {
              name: name,
              description: description,
              customer: customer,
              hours: hours,
              quantity: quantity
            })
    return res.status(201).json({ project: projectToEdit })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})


export default projectsRouter