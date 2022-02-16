import React from "react"
import { Link } from "react-router-dom"

import AuthenticatedHomePage from "../layout/AuthenticatedHomePage"

const HomePage = props => {

  let display = (
    <div className="home-page-container">
      <h1 className="page-heading">Welcome to the App!</h1>
      <p>"Woodworking Project Management and Cost Calculator"</p>
      <p>*** Currently under construction ***</p>
      <p>The app will be FREE to use!</p>
      <Link to="/wood-info">
        <p className = "home-page-link">Wood Info</p>
      </Link>
      <Link to="/dev-info">
        <p className = "home-page-link">Developer Info</p>
      </Link>
    </div>
  )

  if (props.user) {
    display = 
      <AuthenticatedHomePage user={props.user} />
  }

  return (
    <>
      {display}
    </>
  )
}

export default HomePage