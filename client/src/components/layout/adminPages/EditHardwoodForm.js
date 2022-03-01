import React, { useState } from "react"

const EditHardwoodForm = props => {
  const [editedHardwood, setEditedHardwood] = useState ({
    id: props.wood.id,
    name: props.wood.name,
    price: props.wood.price
  })

  const handleInputChange = event => {
    setEditedHardwood({
        ...editedHardwood, 
        [event.currentTarget.name]: event.currentTarget.value 
    })
  }

  const handleEditSubmit = async event => {
    event.preventDefault()
    props.submitEditHardwood(editedHardwood)
    props.handleClickEdit()
    clearForm()
  }

  const clearForm = () => {
    setEditedHardwood({
      name: "",
      price: "",
      region: "",
      jankaHardness: "",
      imageUrl: ""
    })
  }

  return (

    <form onSubmit={handleEditSubmit} className="edited-hardwood-form">

      <label htmlFor="name" className="edit-wood-name">Name
        <input
          type="text"
          id="edit-wood-name"
          name="name"
          onChange={handleInputChange}
          value={editedHardwood.name}
        />
      </label>

      <label htmlFor="price" className="edit-wood-price">Price per boardfoot
        <input
          type="number" min="0" step="0.01"
          id="edit-wood-price"
          name="price"
          onChange={handleInputChange}
          value={editedHardwood.price}
        />
      </label>

      <input 
        className="edit-hardwood-form-submit" 
        id="edit-hardwood-form-submit"
        type="submit">
      </input>

    </form>
    
  )
}

export default EditHardwoodForm