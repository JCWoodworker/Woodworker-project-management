import express from 'express'
import Customer from '../../../models/Customer.js'

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
  try {

  } catch(error) {
    
  }
})

export default crmCustomerNotesRouter