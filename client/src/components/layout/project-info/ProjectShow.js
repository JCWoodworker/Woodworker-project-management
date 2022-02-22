import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import AddWoodForm from "./AddWoodForm"
import AddedWoodTile from "./AddedWoodTile"

const ProjectShow = props => {
  const [totalProjectcost, setTotalProjectCost] = useState(null)
  const [projectWoodList, setProjectWoodList] = useState([])
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

  
  let totalWoodCost = 0.00
  const selectedWoodList = project.selectedWoods.map(wood => {
    let woodCost = (wood.bf * wood.price).toFixed(2)
    totalWoodCost += parseFloat(woodCost)

    return (
      <AddedWoodTile key={wood.name} woodCost={woodCost} wood={wood} />
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
      <h4 className="project-description"><strong>Description: </strong>{project.description}</h4>
      <div className="woods-metrics-container">
        <div className="show-metrics-container">
          <p>WOOD COST: ${totalWoodCost}</p>
          <p>COMING SOON:</p>
          <p>* Add Estimated labor Hours and View Estimated Cost including labor</p>
          <p>* View Suggested Retail Pricing</p>
          <p>* Edit Project and Delete Woods</p>
        </div>
        <AddWoodForm 
          projectId={props.match.params.id} 
          selectedWoodArray={project.selectedWoods}
        />
      </div>
      <h3>Woods Needed for Project</h3>
      <div className="added-wood-tile-container">
        {selectedWoodList}
      </div>
      <div className="back-button=container">
        <Link to='/' className="back-button">GO BACK</Link>
      </div>
    </div>
  )
}

export default ProjectShow
