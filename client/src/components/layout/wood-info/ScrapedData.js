import React, { useEffect, useState } from "react"

const ScrapedData = props => {
  const [scraped, setScraped] = useState([])

  const fetchScrapedData = async () => {
    try {
      const response = await fetch(`/api/v1/scraper/${props.woodName}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const scrapedData = await response.json()
      setScraped(scrapedData.woodInfo)
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const clearData = () => {
    setScraped([])
    console.log('cleared')
  }

  useEffect(() => {
    fetchScrapedData()
  }, [])

  let showScrapedData = <p>Unable to scrape data 😞</p>

  if (scraped) {
    showScrapedData = 
      <div className="scraper">
        <h5>{scraped.name}</h5>
        <p>{scraped.appearance}</p>
      </div>
  }

  return (
    <div className="scraper">
      {showScrapedData}
    </div>
  )

}

export default ScrapedData