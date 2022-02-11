import express from "express"
import got from 'got'
import kelvinConverter from "../../../../services/KelvinConverter.js"
import weatherKey from '../../../config.js'

const weatherRouter = new express.Router()

weatherRouter.get('/:lat&:long', async (req, res) => {
  try {
    const response = await got(`https://api.openweathermap.org/data/2.5/weather?lat=${req.params.lat}&lon=${req.params.long}&appid=d8e8742fa1b1aa5b85716c6144013e98`)
    const body = JSON.parse(response.body)
    const city = body.name
    const description = body.weather[0].description
    const icon = body.weather[0].icon
    const temp = kelvinConverter(parseInt(body.main.temp))
    return res.status(200).json({ city, description, temp, icon })
  } catch(error) {
    return res.status(500).json({ error: error })
  }

})

export default weatherRouter