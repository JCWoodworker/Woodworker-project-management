import React from "react"
import { Link } from "react-router-dom"
import SignOutButton from "../authentication/SignOutButton"
import SponsorTile from "./SponsorTile"

const TopBar = ({ user }) => {

  const unauthenticatedListItems =
    <ul className="top-links-right">
      <li><Link to="/" key="home" className="link-item home-link">Home</Link></li>
      <li><Link to="/user-sessions/new" key="sign-in" className="link-item">Login</Link></li>
      <li><Link to="/users/new" key="sign-up" className="link-item">Register</Link></li>
    </ul>


  let loggedInLinks = null
  if (user) {
    if (user.admin) {
      loggedInLinks = 
        <ul className="logged-in-links">
        </ul>
    } else {
    loggedInLinks = 
      <>
        <ul className="logged-in-links">
          <li><Link to="/" className="logged-in link-item">Projects</Link></li>
          <li><Link to="/settings" className="logged-in link-item">Settings</Link></li>
        </ul>
        <SignOutButton />
      </>
    }  
  }
  
  return (
    <div className="top-links">
      <div className="top-links-left">
        <SponsorTile />
        {loggedInLinks}
      </div>
      {/* <div className="top-links-right">
      </div> */}
    </div>
  )
}

export default TopBar
