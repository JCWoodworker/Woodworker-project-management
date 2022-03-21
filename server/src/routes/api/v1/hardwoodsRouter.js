import express from 'express'
import { Hardwood } from '../../../models/index.js'
import { ValidationError } from 'objection'
import HardwoodSerializer from '../../../../serializers/HardwoodSerializer.js'
import cleanUserInput from '../../../../services/cleanUserInput.js'

const hardwoodsRouter = new express.Router()

hardwoodsRouter.get('/', async (req, res) => {
  try {
    const hardwoods = await Hardwood.query().orderBy("name")
    const serializedHardwoods = await hardwoods.map(hardwood => {
      return HardwoodSerializer.getSummary(hardwood)
    })
    return res.status(200).json({ hardwoods: serializedHardwoods })
  } catch(error) {
    return res.status(500).json({ error: error })
  }
})

hardwoodsRouter.post('/', async (req, res) => {
  const formInput = cleanUserInput(req.body)
  try {
    const newHardwood = await Hardwood.query().insertAndFetch(formInput)
    const serializedNewHardwood = await HardwoodSerializer.getSummary(newHardwood)
    return res.status(201).json({ hardwood: serializedNewHardwood})
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

hardwoodsRouter.post('/edit', async (req, res) => {
  const formInput = cleanUserInput(req.body)
  const { id, name, price} = formInput
  try {
    const updatedHardwood = 
      await Hardwood
        .query()
        .patchAndFetchById(
          id, {
            name: name,
            price: price
          })
    const serializedUpdatedHardwood = await HardwoodSerializer.getSummary(updatedHardwood)
    return res.status(201).json({ hardwood: serializedUpdatedHardwood})
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

hardwoodsRouter.delete('/', async (req, res) => {
  const { hardwoodId } = req.body
  try {
    await Hardwood.query().findById(hardwoodId).delete()
    return res.status(201).json({ message: 'Successfully Deleted' })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default hardwoodsRouter