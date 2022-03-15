import React from "react"
import { Link } from "react-router-dom"

import AuthenticatedHomePage from "../layout/AuthenticatedHomePage"
import AdminHome from "./adminPages/adminHome"

const HomePage = props => {

  let display = (
    <div className="home-page-container unauthenticated-home-page">
      <h1 className="page-heading">Welcome to the Woodworker's Project Management App</h1>
      <h4>Use this app to create projects, add different woods by the boardfoot, estimate costs, and receive suggested retail pricing</h4>
      <p></p>
      <p>The app is FREE for woodworkers, and sponsored by a local lumber yard!</p>
      <p>Sign up and start managing your projects!</p>
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