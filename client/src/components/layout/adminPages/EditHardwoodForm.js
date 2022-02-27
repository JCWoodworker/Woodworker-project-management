import React, { useState } from "react"

const EditHardwoodForm = props => {
  const [editedHardwood, setEditedHardwood] = useState ({
    name: "",
    price: ""
  })

  const handleInputChange = event => {
    setEditedHardwood({
        ...editedHardwood, 
        [event.currentTarget.name]: event.currentTarget.value 
    })
  }

  const handleEditSubmit = async event => {
    debugger
    event.preventDefault()
    props.submitEditHardwood()
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

      <label htmlFor="name" className="name">Name
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleInputChange}
          value={editedHardwood.name}
        />
      </label>

      <label htmlFor="price" className="price">Price per boardfoot
        <input
          type="number" min="0" step="0.01"
          id="price"
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