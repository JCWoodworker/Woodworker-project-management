import React from "react"

const AddedWoodTile = props => {
  
  return (
    <div>
      <p>Wood: {props.wood.name}</p>
      <p>Board-Feet: {props.wood.bf}</p>
      <p>Cost: ${props.woodCost}</p>
    </div>
  )
}

export default AddedWoodTile