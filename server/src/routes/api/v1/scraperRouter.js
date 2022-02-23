import express from 'express'
import scrapeData from '../../../../services/webScraper.js'

const scraperRouter = new express.Router()

scraperRouter.get('/:wood', async (req, res) => {
  const woodInfo = await scrapeData(`${req.params.wood}`)
  res.set({ 'Content-Type': 'application/json' }).status(200).json({ woodInfo })
})

export default scraperRouter