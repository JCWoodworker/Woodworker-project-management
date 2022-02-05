import React from "react";

const SponsorTile = props => {

  return (
    <div className="sponsor-tile">
      <h3>This App Is Sponsored By:</h3>
      <a href="https://www.rilocalwoodworks.com">
      <img
        className="sponsor-logo" 
        src="https://i.imgur.com/2j5LqFQ.jpg"
        height="200px"
        width="200px" 
      />
      </a>

    </div>

  )
}

export default SponsorTile