import React from "react";

const SponsorTile = props => {

  return (
    <div className="sponsor-tile">
      <a href="https://www.rilocalwoodworks.com" target="_blank">
      <img
        className="sponsor-logo link-item" 
        src="https://i.imgur.com/2j5LqFQ.jpg"
        height="200px"
        width="200px" 
      />
      </a>
      <a href="https://www.rilocalwoodworks.com" target="_blank">
        <p className="link-item">RI Local Woodworks</p>
      </a>
    </div>

  )
}

export default SponsorTile