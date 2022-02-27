import React, { useState } from "react"
import EditHardwoodForm from "./EditHardwoodForm"

const WoodPriceTile = props => {
  const [showEditForm, setShowEditForm] = useState (false)
  let editFormContainer = null

  const handleClickDelete = () => {
    confirm(`
    Option to delete is in progress.  
    This will only delete a hardwood if ZERO projects are using it!!
    `)? 
      props.deleteHardwoodFromDatabase(props.wood.id)
      : alert('cancelled')
  }

  const handleClickEdit = () => {
    showEditForm? setShowEditForm(false) : setShowEditForm(true)
  }

  !showEditForm? editFormContainer = null
    : editFormContainer =
      <div>
        <p>Edit {props.wood.name}'s Price</p>
        <EditHardwoodForm
          submitEditHardwood={props.submitEditHardwood}
          handleClickEdit={handleClickEdit}  
          wood={props.wood}   
        />
      </div>

  return (
    <li className="wood-price-item">
      <p 
        onClick={handleClickDelete}
        className="remove-wood-x">
        ✖️</p>
      <p>{props.wood.name}</p>
      <p>${props.wood.price}</p>
      <p onClick={handleClickEdit}>EDIT</p>
      {editFormContainer}
    </li>
  )
}

export default WoodPriceTile