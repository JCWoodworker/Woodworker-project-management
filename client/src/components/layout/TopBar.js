import React from "react"
import { Link } from "react-router-dom"
import SignOutButton from "../authentication/SignOutButton"
import SponsorTile from "./SponsorTile"

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    
    <Link to="/">
      <p className="link-item home-linkt">Home</p>
    </Link>,
    <p key="sign-in" className="link-item">
      <Link to="/user-sessions/new">Sign In</Link>
    </p>,
    <p key="sign-up" className="link-item">
      <Link to="/users/new">
        Sign Up
      </Link>
    </p>,
  ]

  const authenticatedListItems = [
    <p key="sign-out" className="link-item">
      <SignOutButton />
    </p>,
  ]

  let loggedInLinks = null
  if (user) {
    loggedInLinks = 
      <div className="logged-in-links">
        <Link to="/">
          <p className="logged-in">Active Projects</p>
        </Link>
        <Link to="/wood-info">
          <p className="logged-in">Wood Info</p>
        </Link>
        {/* <p className="logged-in">Settings</p> */}
      </div>  
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
