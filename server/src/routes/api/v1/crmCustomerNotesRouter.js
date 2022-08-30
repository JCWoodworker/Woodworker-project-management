import express from 'express'
import { ValidationError } from 'objection'
import cleanUserInput from '../../../../services/cleanUserInput.js'
import Customer from '../../../models/Customer.js'
import CustomerNote from '../../../models/CustomerNote.js'

const crmCustomerNotesRouter = new express.Router()

crmCustomerNotesRouter.get("/:id", async (req, res) => { 
  const { id } = req.params
  try {
    const customer = await Customer.query().findById(id)
    customer.notes = await customer.$relatedQuery("customerNotes")
    return res.status(200).json({ notes: customer.notes })
  } catch(error) {
    return res.status(500).json({ error: error.message })
  }
})

crmCustomerNotesRouter.post("/", async (req,res) => {
  const formInput = cleanUserInput(req.body)
  try {
    debugger
    const newNote = await CustomerNote.query().insertAndFetch(formInput)
    debugger
    return res.status(201).json({ newNote: newNote })
  } catch(error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ error: error })
  }
})

export default crmCustomerNotesRouter