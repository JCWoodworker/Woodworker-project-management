import React, { useState, useEffect } from "react"

import translateServerErrors from '../../../services/translateServerErrors'
import ErrorList from "../ErrorList"

import WoodPriceTile from "./WoodPriceTile"
import AddHardwoodForm from "./AddHardwoodForm"

const AdminHome = props => {
  const [hardwoodData, setHardwoodData] = useState([])
  const [errors, setErrors] = useState([])

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

  const submitEditHardwood = async addHardwoodData => {
    debugger
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

  return (
    <div className="admin-page-container">
      <h1>Welcome to the Admin Portal</h1>
      <p>COMING SOON:</p>
      <p>* Edit Hardwoods Pricing</p>
      <ul>* View Metrics including:
        <li key="x1x">Number of Users</li>
        <li key="x2x">Number of Active Projects</li>
        <li key="x3x">Top Woods Needed - by the boardfoot</li>
      </ul>
      <ErrorList errors={errors} />
      <AddHardwoodForm
        addHardwoodToDatabase={addHardwoodToDatabase}
      />
      <ul className="wood-price-list">
        {listAllHardwoods}
      </ul>
      
    </div>
  )
}

export default AdminHome