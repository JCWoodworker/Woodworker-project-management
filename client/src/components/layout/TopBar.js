import React from "react"
import { Link } from "react-router-dom"
import SignOutButton from "../authentication/SignOutButton"
import SponsorTile from "./SponsorTile"

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
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

  let userName = null
  if (user) {
    userName = <p className="greeting"> - Hello  {user.email}!</p>
  }
  
  return (
    <div className="top-links">
      <div className="top-links-left">
        <SponsorTile />
        {userName}
      </div>
      <div className="top-links-right">
        {user ? authenticatedListItems : unauthenticatedListItems}
      </div>
    </div>
  )
}

export default TopBar
