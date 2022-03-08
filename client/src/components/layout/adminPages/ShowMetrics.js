import React, { useState, useEffect } from "react"
import ChartTile from "./ChartTile"

const ShowMetrics = props => {
  const [anonymousUserData, setAnonymousUserData] = useState([])
  const [anonymousProjectData, setAnonymousProjectData] = useState([])
  const [anonymousWoodData, setAnonymousWoodData] = useState([])

  // const [values] = useState()

  const getAnonymousUserData = async () => {
    try {
      const response = await fetch(`/api/v1/admin/userData`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setAnonymousUserData(body.userData)
    } catch (error) {
      console.error(`Error in fetch: ${error}`)
    }
  }
  
  const getAnonymousProjectData = async () => {
    try {
      const response = await fetch(`/api/v1/admin/projectData`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setAnonymousProjectData(body.projectData)
    } catch (error) {
      console.error(`Error in fetch: ${error}`)
    }
  }

  const getAnonymousWoodData = async () => {
    try {
      const response = await fetch(`/api/v1/admin/woodData`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setAnonymousWoodData(body.woodData)
    } catch (error) {
      console.error(`Error in fetch: ${error}`)
    }
  }

  useEffect(() => {
    getAnonymousUserData()
    getAnonymousProjectData()
    getAnonymousWoodData()
  }, [])

  let labels = []
  let values = []

  if (anonymousWoodData.length > 0) {
    for (let i = 0; i < 7; i++) {
      labels.push(anonymousWoodData[i].name)
      values.push(anonymousWoodData[i].boardFeet)
    }
  }


  return (
    <>
      <div>
      <h4>Customer Metrics</h4>
      <p>Non-Admin Users: {anonymousUserData.length}</p>
      <p>Active projects: {anonymousProjectData.length}</p>
      </div>
      <>
      <ChartTile
        labels={labels} 
        values={values} 
      />
      </>
    </>
  )
}

export default ShowMetrics