import React from "react"
import { Popup } from "semantic-ui-react"

const SponsorTile = props => {

  return (
    <div className="sponsor-tile">
      <a href="https://www.rilocalwoodworks.com" target="_blank">
        <Popup
          className="popup"
          content="Visit RI Local Woodworks"
          key="123"
          position="bottom left"
          trigger={
            <img
              className="sponsor-logo link-item" 
              src="https://i.imgur.com/2j5LqFQ.jpg"
              height="200px"
              width="200px" 
            />
          }
        />
      </a>
    </div>

  )
}

export default SponsorTile