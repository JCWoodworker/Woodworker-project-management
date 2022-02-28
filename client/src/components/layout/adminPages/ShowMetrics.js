import React, { useState, useEffect } from "react"
import ChartTile from "./ChartTile"

const ShowMetrics = props => {
  const [anonymousUserData, setAnonymousUserData] = useState([])
  const [anonymousProjectData, setAnonymousProjectData] = useState([])
  const [anonymousWoodData, setAnonymousWoodData] = useState([])

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
    debugger
    try {
      const response = await fetch(`/api/v1/admin/woodData`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      debugger
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

  return (
    <>
      <div>
      <h4>Customer Metrics</h4>
      <p>Non-Admin Users: {anonymousUserData.length}</p>
      <p>Active projects: {anonymousProjectData.length}</p>
      </div>
      <>
      <ChartTile
        woodData={anonymousWoodData} 
      />
      </>
    </>
  )
}

export default ShowMetrics