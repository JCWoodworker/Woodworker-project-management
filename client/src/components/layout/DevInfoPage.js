import React from 'react'

const DevInfoPage = props => {

  return (
    <div className="home-page-container">
      <div className="dev-info-container">
        <img className="dev-image" src="https://i.imgur.com/3t3Ou80.jpg?1" />
        <div className="dev-details">
          <h1 className="page-heading">James Corey</h1>
          <p>Software Engineer / Woodworker / Dog Dad</p>
          <ul>Quick Facts:</ul>
            <li>Just finished an immersive, 20 week full stack coding bootcamp at Launch Academy in Boston, MA</li>
            <li>Long work history in sales (mainly automotive) and restaurant management</li>
            <li>Always the go-to tech guy in every job no matter what the industry</li>
            <li>Owner/Maker at RI Local Woodworks, LLC</li>
            <li>Excited to put the creative and problem-solving halves of my brain together with a career in software development!</li>
        </div>
      </div>
    </div>
  )
}

export default DevInfoPage