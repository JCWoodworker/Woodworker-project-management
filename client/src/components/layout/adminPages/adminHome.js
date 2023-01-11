import React, { useState, useEffect } from "react"

import translateServerErrors from '../../../services/translateServerErrors'
import ErrorList from "../ErrorList"

import WoodPriceTile from "./WoodPriceTile"
import AddHardwoodForm from "./AddHardwoodForm"
import ShowMetrics from "./ShowMetrics"
import EmailCampaignIndex from "./EmailCampaignIndex"

const AdminHome = props => {
  const [errors, setErrors] = useState([])
  const [hardwoodData, setHardwoodData] = useState([])

  const [showAddWood, setShowAddWood] = useState(false)
  const [showEditWood, setShowEditWood] = useState(false)
  const [showMetrics, setShowMetrics] = useState(false)
  const [showEmail, setShowEmail] = useState(false)
  
  const [adminUpdateContainer, setAdminUpdateContainer] = useState({
    message: "Select a button above to make changes"
  })

  const getAllHardwoods = async () => {
    try {
      const response = await fetch(`/api/v1/hardwoods`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setHardwoodData(body.hardwoods)
    } catch (error) {
      console.error(`Error in fetch: ${error}`)
    }
  }

  useEffect(() => {
    getAllHardwoods()
  }, [])  

  const addHardwoodToDatabase = async addHardwoodData => {
    try {
      const response = await fetch(`/api/v1/hardwoods`, {
        method: "POST",
        headers: new Headers ({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(addHardwoodData)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          setErrors(newErrors)
        }
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const body = await response.json()
        setErrors([])
        setHardwoodData([...hardwoodData, body.hardwood])
        setAdminUpdateContainer({message: `${body.hardwood.name} added to database`})
        setShowAddWood(false)

      }
    } catch (error) {
      console.error(`Error in fetch ${error.message}`)
    }
  }

  const submitEditHardwood = async editHardwoodData => {
    try {
      const response = await fetch(`/api/v1/hardwoods/edit`, {
        method: "POST",
        headers: new Headers ({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(editHardwoodData)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const newErrors = translateServerErrors(body.errors)
          setErrors(newErrors)
        }
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const body = await response.json()
        
        setErrors([])
        setShowEditWood(false)
        console.log(body.hardwood)
        
        setAdminUpdateContainer({message: `Hardwood database has been updated.  Please refresh your browser`})
      }
    } catch (error) {
      console.error(`Error in fetch ${error.message}`)
    }
  }

  const deleteHardwoodFromDatabase = async hardwoodId => {
    try {
      const response = await fetch(`/api/v1/hardwoods`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({ hardwoodId })
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          alert(body.message)
        }
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw (error)
      }
      const newSelectedWoods = hardwoodData.filter(wood => {
        return wood.id != hardwoodId
      })
      setHardwoodData(newSelectedWoods)
    } catch (error) {
      alert(`This wood is in use within a customer's project and cannot be deleted!!`)
      return console.error(`Error in fetch: ${error.message}`)
    }

  }

  const listAllHardwoods = hardwoodData.map((wood) => {
    return (
      <WoodPriceTile key={wood.id}
        wood={wood} 
        deleteHardwoodFromDatabase={deleteHardwoodFromDatabase}
        submitEditHardwood={submitEditHardwood}
      />
    )
  })

  const handleAddClick = () => {
    setShowAddWood(true)
    setShowEditWood(false)
    setShowMetrics(false)
    setShowEmail(false)
  }
  const handleEditClick = () => {
    setShowAddWood(false)
    setShowEditWood(true)
    setShowMetrics(false)
    setShowEmail(false)
  }
  const handleMetricsClick = () => {
    setShowAddWood(false)
    setShowEditWood(false)
    setShowMetrics(true)
    setShowEmail(false)
  }
  const handleEmailClick = () => {
    setShowAddWood(false)
    setShowEditWood(false)
    setShowMetrics(false)
    setShowEmail(true)
  }

  let adminFeatureSection = null

  if (showAddWood) { 
    adminFeatureSection =
    <div className="add-a-new-hardwood-container">
      <h3>Add A New Hardwood</h3>
      <ErrorList errors={errors} />
      <AddHardwoodForm
        addHardwoodToDatabase={addHardwoodToDatabase}
      />
    </div>
  } else if (showEditWood) {
    adminFeatureSection =
    <ul className="wood-price-list">
      {listAllHardwoods}
    </ul>
  } else if (showMetrics) {
    adminFeatureSection = 
      <ShowMetrics />
  } else if (showEmail) {
    adminFeatureSection = 
      <EmailCampaignIndex />
  } else {
    adminFeatureSection = 
      <p>{adminUpdateContainer.message}</p>
  }

  return (
    <div className="admin-page-container">

      <h1>Welcome, RI Local Woodworks</h1>

      <div className="admin-option-buttons">

        <label className="all-buttons">
          <button
            onClick={handleAddClick}
            id="all-buttons"
            type="button">
              Add Wood
          </button>
        </label>
        <label className="all-buttons">
          <button
            onClick={handleEditClick}
            id="all-buttons"
            type="button">
              Edit/Delete Wood
          </button>
        </label>
        <label className="all-buttons">
          <button
            onClick={handleMetricsClick}
            id="all-buttons"
            type="button">
              Show Metrics
          </button>
        </label>
        <label className="all-buttons">
          <button
            onClick={handleEmailClick}
            id="all-buttons"
            type="button">
              Email Campaigns
          </button>
        </label>

      </div>

      <div className="admin-feature-section">
        {adminFeatureSection}
      </div>

    </div>
  )
}

export default AdminHome