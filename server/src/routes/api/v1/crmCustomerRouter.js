import express from 'express'
import { ValidationError } from 'objection'
import cleanUserInput from '../../../../services/cleanUserInput.js'
import { User, Project, Customer } from '../../../models/index.js'
import CustomerSerializer from '../../../../serializers/CustomerSerializer.js'

const crmCustomersRouter = new express.Router()

crmCustomersRouter.get('/', async (req, res) => {
  try {
    const customers = await Customer.query().where("userId", "=", req.user.id)
    return res.status(200).json({ customers: customers })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

crmCustomersRouter.post('/', async (req, res) => {
  const formInput = cleanUserInput(req.body)
  try {
    const newCustomer = await Customer.query().insertAndFetch(formInput)
    const serializedCustomer = await CustomerSerializer.getSummary(newCustomer)
    return res.status(201).json({ newCustomer: serializedCustomer })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ error: error })
  }
})

crmCustomersRouter.delete('/', async (req, res) => {
  const id = parseInt(req.body.customerId)
  try {
    await Customer.query().findById(id).delete()
    return res.status(201).json({ message: "Successfully Deleted" })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

export default crmCustomersRouter