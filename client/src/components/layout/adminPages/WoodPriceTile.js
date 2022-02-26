import React from "react"

const WoodPriceTile = props => {

  const handleClickX = event => {
    confirm(`
    Option to delete is in progress.  
    This will only delete a hardwood if ZERO projects are using it!!
    `)? 
      props.deleteHardwoodFromDatabase(props.wood.id)
      : alert('cancelled')
  }

  return (
    <li className="wood-price-item">
      <p 
        onClick={handleClickX}
        className="remove-wood-x">
        ✖️</p>
      <p>{props.wood.name}</p>
      <p>${props.wood.price}</p>
    </li>
  )
}

export default WoodPriceTile