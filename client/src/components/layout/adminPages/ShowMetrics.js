import React, { useState, useEffect } from "react"
import ChartTile from "./ChartTile"

const ShowMetrics = props => {
  const [userData, setUserData] = useState([])
  const [projectData, setProjectData] = useState([])

  const [values, setValues] = useState([])
  const [labels, setLabels] = useState([])

  const getUserData = async () => {
    try {
      const response = await fetch(`/api/v1/admin/userData`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setUserData(body.userData)
    } catch (error) {
      console.error(`Error in fetch: ${error}`)
    }
  }
  
  const getProjectData = async () => {
    try {
      const response = await fetch(`/api/v1/admin/projectData`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setProjectData(body.projectData)
    } catch (error) {
      console.error(`Error in fetch: ${error}`)
    }
  }

  const getWoodData = async () => {
    try {
      const response = await fetch(`/api/v1/admin/woodData`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      const sortedBodyData = body.woodData?.sort((a, b) => (a.boardFeet > b.boardFeet ? -1 : 1))
      let labelData = []
      let valueData = []
      for (let i=0; i<10; i++) {
        labelData.push(sortedBodyData[i].name)
        valueData.push(sortedBodyData[i].boardFeet)
      }
      setLabels(labelData)
      setValues(valueData)
    } catch (error) {
      console.error(`Error in fetch: ${error}`)
    }
  }

  useEffect(() => {
    getUserData()
    getProjectData()
    getWoodData()
  }, [])

  return (
    <>
      <div>
      <h4>Non-Admin Users: {userData.length}</h4>
      <h4>Active projects: {projectData.length}</h4>
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