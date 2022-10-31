import React from "react"

const AddedWoodTile = props => {
  
  const handleDeleteWood = () => {
    props.deleteWoodFromProject(props.wood.id)
  }
  
  return (
    <div className="added-wood-tile">
      <p>{props.wood.name} : </p>
      <p> {props.adjustedBoardfeet} bdft - ${props.woodCost}    
        <button 
          id="delete-persisted-wood-button"
          onClick={handleDeleteWood}>
            ❌
        </button>
      </p>  
    </div>
  )
}

export default AddedWoodTile