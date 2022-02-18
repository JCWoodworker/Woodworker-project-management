import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import WoodSelector from "./WoodSelector"
import Select from "react-select"

const ProjectShow = props => {
  const [selectedWood, setSelectedWood] = useState(null)
  const [hardwoods, setHardwoods] = useState ([])
  const [project, setProject] = useState ({
    name: "",
    customer: "",
    description: "",
    quantity: ""
  })

  const getProject = async () => {
    try {
      const response = await fetch(`/api/v1/projects/${props.match.params.id}`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setProject(body.project)
    } catch (error) {
      console.error(`Error in fetch: ${error}`)
    }
  }

  useEffect(() => {
    getProject()
  }, [])

  const handleSelectionChange = event => {
    event.preventDefault()
    setSelectedWood(event.target.value)
  }

  const handleWoodSubmit = () => {
    if (!hardwoods.includes(selectedWood.value)) {
      setHardwoods(hardwoods.concat(selectedWood.value))
    } else {
      alert(`You've already selected ${selectedWood.value}!`)
    }
  }

  let yourWoodList = <p>Select Some Wood!</p>
  if (hardwoods) {
    yourWoodList = hardwoods.map(wood => {
      return (
        <li key={wood}>{wood}</li>
      )
    })
  }

  const woodOptions = [
    {value: "wood 1", label: 'Wood 1'},
    {value: "wood 2", label: 'Wood 2'},
    {value: "wood 3", label: 'Wood 3'},
    {value: "wood 4", label: 'Wood 4'},
  ]

  console.log(`Hardwood list ${hardwoods}`)

  return (
    <>
      <div className="project-show">
        <div className="project-show-headers">
          <h1 className="page-heading">{project.name}</h1>
          <div className="separator"></div>
          <div className="customer-order">
            <p>Customer: {project.customer}</p>
            <p>Order Quantity: {project.quantity}</p>
          </div>
        </div>
        <h4 className="project-description"><strong>Description: </strong>{project.description}</h4>
        <div className="woods-metrics-container">
          <div className="show-metrics-container">
            <p>COMING SOON ...</p>
            <p>* View Estimated Cost</p>
            <p>* View Suggested Retail Pricing</p>
            <p>* Edit Project</p>
          </div>
          <div className="add-woods-container">
            <p>Select A Hardwood</p>
            <Select 
              id="hardwood-list" 
              options={woodOptions}
              onChange={setSelectedWood}
            />
            <button 
              type="button" 
              className="add-wood-button"
              onClick={handleWoodSubmit}
              >Add Selected
            </button>
          </div>
          <div className="selected-woods-container">
            <p>Selected Hardwoods</p>
            <ul>
              {yourWoodList}
            </ul>
          </div>
        </div>
      <div className="back-button=container">
        <Link to='/' className="back-button">GO BACK</Link>
      </div>
      </div>
    </>
  )
}

export default ProjectShow

{/* <select 
  id="hardwood-list"
  value={selectedWood}
  onChange={handleSelectionChange}
>
  <option value="wood 1">Wood 1</option>
  <option value="wood 2">Wood 2</option>
  <option value="wood 3">Wood 3</option>
  <option value="wood 4">Wood 4</option>
  <option value="wood 5">Wood 5</option>
</select> */}