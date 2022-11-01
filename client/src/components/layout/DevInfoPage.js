import React from 'react'
import { Link } from 'react-router-dom'

const DevInfoPage = props => {

  return (
    <div className="home-page-container">
      <div className="dev-info-container">
        <img className="dev-image" src="https://i.imgur.com/oLEqhuJl.jpg" />
        <div className="dev-details">
          <h1 className="page-heading">James Corey</h1>
          <p>Software Engineer / Woodworker / Dog Dad / Father / Skater / Ninja Warrior</p>
          <ul>Quick Facts:</ul>
            <li>CURRENT ROLE: Ops Engineer @ Grubhub (Boston, MA)</li>
            <li>Completed immersive, 20 week, full stack coding bootcamp at Launch Academy in Boston, MA (Feb, 2022)</li>
            <li>Long work history in sales (mainly automotive), restaurant management, and hospitality</li>
            <li>Always the go-to tech guy in every job no matter what the industry</li>
            <li>Owner/Maker/Woodworker at RI Local Woodworks, LLC</li>
            <li>Excited to be putting the creative and problem-solving halves of my brain together with a career in software development!</li>
            <Link to='/'>
              <button 
                id="all-buttons">
                Back To Projects
              </button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default DevInfoPage