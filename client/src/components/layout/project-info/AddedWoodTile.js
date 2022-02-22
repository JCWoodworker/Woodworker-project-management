import React from "react"

const AddedWoodTile = props => {
  
  return (
    <div className="added-wood-tile">
      <p>{props.wood.name}</p>
      <p>Board-Ft: {props.wood.bf}</p>
      <p>Cost: ${props.woodCost}</p>
    </div>
  )
}

export default AddedWoodTile