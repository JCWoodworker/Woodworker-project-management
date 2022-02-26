import React from "react"
import { Link } from "react-router-dom"
import SignOutButton from "../authentication/SignOutButton"
import SponsorTile from "./SponsorTile"

const TopBar = ({ user }) => {

  const unauthenticatedListItems =
    <ul className="top-links-right">
      <li><Link to="/" key="home" key="home" className="link-item home-link">Home</Link></li>
      <li><Link to="/wood-info" key="wood-info" className="link-item">Wood Info</Link></li>
      <li><Link to="/dev-info" key="dev-info" className="link-item">Dev Info</Link></li>
      <li><Link to="/user-sessions/new" key="sign-in" className="link-item">Sign In</Link></li>
      <li><Link to="/users/new" key="sign-up" className="link-item">Sign Up</Link></li>
    </ul>

  const authenticatedListItems = [
    <p key="sign-out">
      <SignOutButton />
    </p>,
  ]

  let loggedInLinks = null
  if (user) {
    if (user.admin) {
      loggedInLinks = 
        <ul className="logged-in-links">
          <li><Link to="/" key="home" key="home" className="link-item home-link">Home</Link></li>
          <li><Link to="/dev-info" className="logged-in link-item">Dev Info</Link></li>
        </ul>
    } else {
    loggedInLinks = 
      <ul className="logged-in-links">
        <li><Link to="/" className="logged-in link-item">Active Projects</Link></li>
        <li><Link to="/wood-info" className="logged-in link-item">Wood Info</Link></li>
        <li><Link to="/dev-info" className="logged-in link-item">Dev Info</Link></li>
      </ul>
    }  
  }
  
  return (
    <div className="top-links">
      <div className="top-links-left">
        <SponsorTile />
        {loggedInLinks}
      </div>
      <div className="top-links-right">
        {user ? authenticatedListItems : unauthenticatedListItems}
      </div>
    </div>
  )
}

export default TopBar
