import React from "react"

const HardwoodTile = props => {

  return (
    <div className="hardwood-tile">
      <h4>{props.wood.name}</h4>
      <div className="underline"></div>
    </div>
  )
}

export default HardwoodTile