import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import AddWoodForm from "./AddWoodForm"
import AddedWoodTile from "./AddedWoodTile"

const ProjectShow = props => {
  const [project, setProject] = useState ({
    name: "",
    customer: "",
    description: "",
    quantity: "",
    selectedWoods: []
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

  let totalWoodCost = 0.00
  
  const selectedWoodList = project.selectedWoods.map(wood => {
    let woodCost = (wood.bf * wood.price).toFixed(2)
    totalWoodCost += parseFloat(woodCost)
    
    return (
      <AddedWoodTile 
        key={wood.name} 
        woodCost={woodCost} 
        wood={wood} 
        deleteWoodFromProject={deleteWoodFromProject}
      />
    )
  })
  totalWoodCost = totalWoodCost.toFixed(2)

  return (
    <div className="project-show">

      <div className="project-show-headers">
        <h1 className="page-heading">{project.name}</h1>
        <div className="customer-order">
          <p>Destination: {project.customer}</p>
          <p>Order Quantity: {project.quantity}</p>
        </div>
      </div>

      <h3 className="project-description">{project.description}</h3>

      <div className="woods-metrics-container">

        <div className="show-metrics-container">
          <p><strong>METRICS:</strong></p>
          <p>WOOD COST: ${totalWoodCost}</p>
          {/* <p>SUGGESTED SALE PRICE: ${suggestedRetailPrice}</p> */}
          <p>* Suggested sale price does not include labor yet</p>
          <p>* Add hardwoods in the container below</p>
        </div>

        <div className="added-wood-tile-container">
          {selectedWoodList}
        </div>

      </div>

      <AddWoodForm 
        projectId={props.match.params.id} 
        selectedWoodArray={project.selectedWoods}
        postWoodsToProject={postWoodsToProject}
      />

      <div className="back-button=container">
        <Link to='/' className="back-button">GO BACK</Link>
      </div>

    </div>
  )
}

export default ProjectShow
