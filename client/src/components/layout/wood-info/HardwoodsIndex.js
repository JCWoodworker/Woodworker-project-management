import React, { useEffect, useState } from "react"

import HardwoodTile from "./HardwoodTile"

const HardwoodsIndex = props => {
  const [woods, setWoods] = useState([])

  const fetchHardwoods = async () => {
    try {
      const response = await fetch("/api/v1/hardwoods")
      if (!response) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setWoods(body.hardwoods)
    } catch (error) {
      return console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchHardwoods()
  }, [])

  const hardwoodTiles = woods.map(wood => {
    return <HardwoodTile key={wood.id} wood={wood} />
  })

  return (
    <div className="home-page-container hardwoods-index">
      {hardwoodTiles}
    </div>
  )
}

export default HardwoodsIndex