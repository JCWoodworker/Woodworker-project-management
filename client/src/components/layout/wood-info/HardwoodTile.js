import React from "react"

const HardwoodTile = props => {

  return (
    <div className="hardwood-tile">
      <h4>{props.wood.name}</h4>
      {/* <p>Janka Hardness: {props.wood.jankaHardness}</p>
      <p>Region: {props.wood.region}</p> */}
      <div className="underline"></div>
    </div>
  )
}

export default HardwoodTile