import React from "react"
import ScrapedData from "./ScrapedData"
import { Popup } from "semantic-ui-react"

const HardwoodTile = props => {

  return (
    <>
      <Popup 
        className="wood-popup"
        trigger={
          <div className="hardwood-tile">
            <h4>{props.wood.name}</h4>
          </div>
        }
        content={
          <ScrapedData 
            woodName={props.wood.name}
          />
        }
        position="top left"
      />  
    </>
  )
}

export default HardwoodTile