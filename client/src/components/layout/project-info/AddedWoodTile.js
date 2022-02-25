import React from "react"

const AddedWoodTile = props => {
  
  const handleClickDeleteWood = () => {
    props.deleteWoodFromProject(props.wood.id)
  }
  
  return (
    <div className="added-wood-tile">
      <p id="wood-name">{props.wood.name}:</p>
      <ul>
        <li id="wood-tile-p">Bdft: {props.wood.bf}</li>
        <li id="wood-tile-p">${props.woodCost}</li>
      </ul>
      <button 
          id="delete-persisted-wood-button"
          onClick={handleClickDeleteWood}>
            x
        </button>
    </div>
  )
}

export default AddedWoodTile