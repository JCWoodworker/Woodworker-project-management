import React, { useState } from "react"
import EditHardwoodForm from "./EditHardwoodForm"

const WoodPriceTile = props => {
  const [showEditForm, setShowEditForm] = useState (false)
  let editFormContainer = null

  const handleClickDelete = () => {
    confirm(`
    This will only delete a hardwood if NONE of your 
    customers have added it to their project!!
    `)? 
      props.deleteHardwoodFromDatabase(props.wood.id)
      : console.log('cancelled')
  }

  const handleClickEdit = () => {
    showEditForm? setShowEditForm(false) : setShowEditForm(true)
  }

  !showEditForm? editFormContainer = null
    : editFormContainer =
      <div className="edit-form-container">
        <p>Edit {props.wood.name}</p>
        <EditHardwoodForm
          submitEditHardwood={props.submitEditHardwood}
          handleClickEdit={handleClickEdit}  
          wood={props.wood}   
        />
      </div>

  return (
    <div className="wood-price-tile-container">
      <div className="wood-price-item">
        <p 
          onClick={handleClickDelete}
          className="remove-wood-x">
          ✖️</p>
        <p 
          className="edit-button"
          onClick={handleClickEdit}>
            Edit
        </p>
        <p>{props.wood.name}</p>
        <p>${props.wood.price}</p>
      </div>
      {editFormContainer}
    </div>
  )
}

export default WoodPriceTile