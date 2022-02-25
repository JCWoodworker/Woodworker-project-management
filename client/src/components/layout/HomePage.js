import React from "react"
import { Link } from "react-router-dom"

import AuthenticatedHomePage from "../layout/AuthenticatedHomePage"

const HomePage = props => {

  let display = (
    <div className="home-page-container unauthenticated-home-page">
      <h1 className="page-heading">Welcome to the Woodworker's Project Management App</h1>
      <h4>"Woodworking Project Management and Cost Calculator"</h4>
      <p>*** Currently under construction ***</p>
      <ul>Users can do the following so far:
        <li>Sign-up, sign-in, sign-out</li>
        <li>Add projects while signed in</li>
        <li>Add hardwoods by the boardfoot to each project</li>
      </ul>
      <p>The app will be FREE for woodworkers to use</p>
      <div className="home-link-list">
        <Link to="/wood-info">
          <p className = "home-page-link">Wood Info</p>
        </Link>
        <Link to="/dev-info">
          <p className = "home-page-link">Developer Info</p>
        </Link>
      </div>
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