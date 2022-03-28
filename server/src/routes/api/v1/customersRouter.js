import express from 'express'
import cleanUserInput from '../../../../services/cleanUserInput'
import { ValidationError } from 'objection'
import { User, Project } from '../../../models/index.js'

const customersRouter = new express.Router()

customersRouter.get('/', async (req, res) => {
  try {

  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

export default customersRouter