import express from 'express'
import { Hardwood } from '../../../models/index.js'
import HardwoodSerializer from '../../../../serializers/HardwoodSerializer.js'

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

// hardwoodsRouter.post('/', async (req, res) => {
//   try {
    
    
    
//   } catch (error) {
//     return res.status(500).json({ errors: error })
//   }
// })

hardwoodsRouter.delete('/', async (req, res) => {
  debugger
  try {
    // await Hardwood.query().findById().delete()
    // return res.status(201).json({ message: 'Successfully Deleted' })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default hardwoodsRouter