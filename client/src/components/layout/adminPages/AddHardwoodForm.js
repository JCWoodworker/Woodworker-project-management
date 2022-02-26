import React, { useState } from "react"

const AddHardwoodForm = props => {
  const [newHardwood, setNewHardwood] = useState ({
    name: "",
    price: "",
    region: "",
    jankaHardness: "",
    imageUrl: ""
  })

  const handleInputChange = event => {
    setNewHardwood({
        ...newHardwood, 
        [event.currentTarget.name]: event.currentTarget.value 
    })
  }
  const handleSubmit = async event => {
    event.preventDefault()
    props.addHardwoodToDatabase(newHardwood)
    clearForm()
  }
  const clearForm = () => {
    setNewHardwood({
      name: "",
      price: "",
      region: "",
      jankaHardness: "",
      imageUrl: ""
    })
  }

  return (
  <form onSubmit={handleSubmit} className="new-hardwood-form">

    <label htmlFor="name" className="name">Name
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleInputChange}
        value={newHardwood.name}
      />
    </label>
    <label htmlFor="price" className="price">Price per boardfoot
      <input
        type="number" min="0" step="0.01"
        id="price"
        name="price"
        onChange={handleInputChange}
        value={newHardwood.price}
      />
    </label>
    <input 
      className="new-hardwood-form-submit" 
      id="new-hardwood-form-submit"
      type="submit">
    </input>

    </form>
  )
}

export default AddHardwoodForm