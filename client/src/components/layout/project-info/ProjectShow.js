import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router"

import AddWoodForm from "./AddWoodForm"
import AddedWoodTile from "./AddedWoodTile"
import ProjectImageIndex from "./imageUploading/ProjectImageIndex"
import ProjectSettingsForm from "./projectSettings/ProjectSettingsForm"

const ProjectShow = props => {
  const [project, setProject] = useState ({
    name: "",
    customer: "",
    description: "",
    quantity: "",
    hours: "",
    selectedWoods: []
  })
  const [showProjectSettings, setShowProjectSettings] = useState(false)
  const [toggleShowAddWoodForm, setToggleShowAddWoodForm] = useState(false)

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

  const postWoodsToProject = async addWoodData => {
    try {
      const response = await fetch(`/api/v1/projects/add-woods`, {
        method: "POST",
        headers: new Headers ({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(addWoodData)
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
      }
        const body = await response.json()
        setProject({...project, selectedWoods: body.project.selectedWoods})
    } catch (error) {
      console.error(`Error in fetch ${error.message}`)
    }
  }

  const deleteWoodFromProject = async hardwoodId => {
    const dataToSend = {
      hardwoodId: hardwoodId,
      projectId: project.id
    }
    try {
      const response = await fetch(`/api/v1/projects/delete-woods`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify( dataToSend )
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
      const newSelectedWoods = project.selectedWoods.filter(wood => {
        return wood.id != hardwoodId
      })
      setProject({...project, selectedWoods: newSelectedWoods})
    } catch (error) {
      return console.error(`Error in fetch: ${error.message}`)
    }

  }

  const deleteProject = async (projectId) => {    
    try {
      const response = await fetch(`/api/v1/projects`, {
        method: "DELETE",
        headers: new Headers ({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({projectId: projectId})
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        console.log(`Project "${project.name}" deleted!`)
      }
    } catch (error) {
      console.error(`Error in DELETE: ${error.message}`)
    }
  }

  const handleDeleteButtonClick = event => {
    if (!confirm('Are you sure you want to delete this project??  This cannot be undone!')) {
      event.preventDefault()
    } else {
      deleteProject(props.match.params.id)
    }
  }

  let totalWoodCost = 0.00
  
  const selectedWoodList = project.selectedWoods
    .sort((a, b) => parseInt(a.bf * a.price) < parseInt(b.bf * b.price) ? 1 : -1)
    .map(wood => {
      const adjustedBoardfeet = (wood.bf * ((props.userSettings.woodWaste / 100) + 1)).toFixed(1)
      const woodCost = ((adjustedBoardfeet * wood.price)).toFixed(2)
      totalWoodCost += parseFloat(woodCost)
      
      return (
        <AddedWoodTile 
          key={wood.name} 
          adjustedBoardfeet={adjustedBoardfeet}
          woodCost={woodCost} 
          wood={wood} 
          deleteWoodFromProject={deleteWoodFromProject}
        />
      )
    })

  totalWoodCost = totalWoodCost.toFixed(2)
  
  let theWordEach = null

  const getRetailPrice = (woodCost) => {
    const woodAndMarkup = totalWoodCost * ((props.userSettings.markup / 100) + 1)
    const retailPrice = woodAndMarkup + parseFloat(props.userSettings.laborRate * project.hours)
    if (project.quantity > 1) {
      theWordEach = "each"
      return (retailPrice/project.quantity).toFixed(2)
    }
    return retailPrice.toFixed(2)
  }

  let projectSettingsForm = null
  const handleShowProjectSettings = () => {
    if (showProjectSettings) {
      setShowProjectSettings(false)
    } else {
      setShowProjectSettings(true)
    }
  }

  if (showProjectSettings) {
    projectSettingsForm = 
      <ProjectSettingsForm 
        project={project}
        projectId={props.match.params.id}
      />
  }

  let addWoodButton =
    <>
      <button 
        id="all-buttons"
        onClick={() => setToggleShowAddWoodForm(true)}
      >
        Add Wood
      </button>
    </>

  let viewAddWoodForm = null
  if (toggleShowAddWoodForm) {
    viewAddWoodForm = 
      <>
        <AddWoodForm 
          projectId={props.match.params.id} 
          selectedWoodArray={project.selectedWoods}
          postWoodsToProject={postWoodsToProject}
          woodWastePercentage={props.userSettings.woodWaste}
          setToggleShowAddWoodForm={setToggleShowAddWoodForm}
        />
      </>
    addWoodButton = null
  }

  return (
    <div className="project-show">
      <div className="project-show-headers">
        <h1 className="page-heading">{project.name}</h1>
        <div className="customer-order">
          <h4 className="project-show-header-details">Destination: <h5 className="project-show-header-details-child">{project.customer}</h5></h4>
          <h4 className="project-show-header-details">Order Quantity: <h5 className="project-show-header-details-child">{project.quantity}</h5></h4>
          <h4 className="project-show-header-details">Description: <h5 className="project-show-header-details-child">{project.description}</h5></h4>
        </div>
      </div>
      <div className="woods-metrics-container">
        <div className="show-metrics-container">
          <div className="metrics-container-child">
            <p className="metrics-label">WOOD COST: </p>
            <p>${totalWoodCost}</p>
          </div>
          <div className="metrics-container-child">
            <p className="metrics-label">LABOR: </p>
            <p>{project.hours} Hours @ ${props.userSettings.laborRate}/hr</p>
          </div>
          <div className="metrics-container-child">
            <p className="metrics-label">SUGGESTED SALE PRICE: </p>
            <p>${getRetailPrice()} {theWordEach}</p>
          </div>
        </div>
        <div className="added-wood-tile-container">
          <h3>Wood List</h3>
          {selectedWoodList}
          {addWoodButton}
        </div>
      </div>
      {viewAddWoodForm}
      <ProjectImageIndex
        projectId={props.match.params.id} 
      />
      <div className="project-top-links">
        <Link to='/'> 
          <button 
            id="all-buttons">
              Back
          </button>
        </Link> 
        <button 
          id="all-buttons"
          onClick={handleShowProjectSettings}>
            Update Project
        </button>
        <Link to='/'> 
          <button
            id="all-buttons"
            onClick={handleDeleteButtonClick}>
              ❌ Delete Project
          </button>
        </Link>
      </div>
      {projectSettingsForm}
    </div>
  )
}

export default withRouter(ProjectShow)
