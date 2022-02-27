import React, { useState, useEffect } from "react"

import translateServerErrors from '../../../services/translateServerErrors'
import ErrorList from "../ErrorList"

import WoodPriceTile from "./WoodPriceTile"
import AddHardwoodForm from "./AddHardwoodForm"

const AdminHome = props => {
  const [hardwoodData, setHardwoodData] = useState([])
  const [errors, setErrors] = useState([])
  const [showAddWood, setShowAddWood] = useState(false)
  const [showEditWood, setShowEditWood] = useState(false)
  const [showMetrics, setShowMetrics] = useState(false)

  let editFormContainer = null

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
        // setHardwoodData(...hardwoodData, body.hardwood)
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
  }
  const handleEditClick = () => {
    setShowAddWood(false)
    setShowEditWood(true)
    setShowMetrics(false)
  }
  const handleMetricsClick = () => {
    setShowAddWood(false)
    setShowEditWood(false)
    setShowMetrics(true)
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
    <>
      <h4>Show Metrics</h4>
      <p>Users: </p>
      <p>Active projects: </p>
      <p>Top Woods Needed: </p>
    </>
  }
  


  return (
    <div className="admin-page-container">

      <h1>Welcome to the Admin Portal</h1>

      <div className="admin-option-buttons">

        <label className="admin-button">
          <button
            onClick={handleAddClick}
            id="admin-button"
            type="button">
              Add/Delete Wood
          </button>
        </label>
        <label className="admin-button">
          <button
            onClick={handleEditClick}
            id="admin-button"
            type="button">
              Edit Pricing
          </button>
        </label>
        <label className="admin-button">
          <button
            onClick={handleMetricsClick}
            id="admin-button"
            type="button">
              Show Metrics
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