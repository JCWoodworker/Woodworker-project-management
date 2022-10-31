import React from "react"
import { Link } from "react-router-dom"

import AuthenticatedHomePage from "../layout/AuthenticatedHomePage"
import AdminHome from "./adminPages/adminHome"

const HomePage = props => {

  let display = (
    <div className="home-page-container unauthenticated-home-page">
      <h1 className="page-heading">Welcome to the Woodworker's Project Management App</h1>
      <h4>Use this app to create projects, add hardwoods by the board foot with local pricing, estimate retail pricing, and more!!</h4>
      <p></p>
      <p>The app is FREE and sponsored by RI Local Woodworks, LLC!</p>
      <p>Click REGISTER in the top bar to get started!</p>
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
    if(props.user.admin) {
      display = 
        <AdminHome user={props.user} />
    } else {
    display =  
      <AuthenticatedHomePage user={props.user} />
    }
  }

  return (
    <>
      {display}
    </>
  )
}

export default HomePage