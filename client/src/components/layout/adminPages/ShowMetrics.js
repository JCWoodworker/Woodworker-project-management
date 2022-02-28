import React, { useState, useEffect } from "react"

const ShowMetrics = props => {
  const [anonymousUserData, setAnonymousUserData] = useState([])
  const [anonymousProjectData, setAnonymousProjectData] = useState([])

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

  useEffect(() => {
    getAnonymousUserData()
    getAnonymousProjectData()
  }, [])

  return (
    <>
      <h4>Show Metrics</h4>
      <p>Non-Admin Users: {anonymousUserData.length}</p>
      <p>Active projects: {anonymousProjectData.length}</p>
      <p>Top Woods Needed: </p>
    </>
  )
}

export default ShowMetrics