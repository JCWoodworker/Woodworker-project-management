import React from "react"
import { Link } from "react-router-dom"
import SignOutButton from "../authentication/SignOutButton"
import SponsorTile from "./SponsorTile"
import { Popup } from "semantic-ui-react"

const TopBar = ({ user }) => {

  const unauthenticatedListItems = [
    <Link to="/" key="home" key="home" className="link-item home-link">Home</Link>,
    <Link to="/wood-info" key="wood-info" className="link-item">Wood Info</Link>,
    <Link to="/dev-info" key="dev-info" className="link-item">Dev Info</Link>,
    <Link to="/user-sessions/new" key="sign-in" className="link-item">Sign In</Link>,
    <Link to="/users/new" key="sign-up" className="link-item">Sign Up</Link>
  ]

  const authenticatedListItems = [
    <p key="sign-out">
      <SignOutButton />
    </p>,
  ]

  let loggedInLinks = null
  if (user) {
    loggedInLinks = 
      <div className="logged-in-links">
        <Link to="/" className="logged-in link-item">Active Projects</Link>
        <Link to="/wood-info" className="logged-in link-item">Wood Info</Link>
        <Link to="/dev-info" className="logged-in link-item">Dev Info</Link>
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
