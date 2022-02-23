import axios from 'axios'
import cheerio from 'cheerio'

const woodInformation = {
  name: "",
  appearance: ""
}

const scrapeData = async woodName => {
    
    const url = `https://www.keimlumber.com/exotic-wood-library/${woodName}`
    
    try {
      
      const { data } = await axios.get(url)
      const $ = cheerio.load(data)
      
      const getWoodName = $(`h1[class="font-heading text-52 text-sm-30 line-height-2 mb-0 text-secondary"]`)
      const getAppearance = $(`div[class="wood-library__page-content mb-9"]`)
      
      woodInformation.name = getWoodName[0].children[0].data
      woodInformation.appearance = getAppearance[0].children[13].children[0].next.data

      return woodInformation
      
    } catch (err) {
      console.error(err)
    }

}

export default scrapeData
