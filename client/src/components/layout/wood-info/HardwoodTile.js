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
            <div className="hardwood-tile-wood-name">
            <h4>{props.wood.name}</h4>
            </div>
            <div className="hardwood-tile-wood-image">
            <img id="hardwood-tile-wood-image" src={props.wood.imageUrl} />
            </div>
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