import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in" className="link-item">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li key="sign-up" className="link-item">
      <Link to="/users/new">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="sign-out" className="link-item">
      <SignOutButton />
    </li>,
  ]

  let userName = null
  if (user) {
    userName = <li className="greeting">Hello  {user.email}!</li>
  }

  return (
    <div className="top-links">
      <ul className="top-links-list">
        <li className="link-item">
          <Link to="/">Home</Link>
        </li>
        {userName}
        {user ? authenticatedListItems : unauthenticatedListItems}
      </ul>
    </div>
  );
};

export default TopBar;
