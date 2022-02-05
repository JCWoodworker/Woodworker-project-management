import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="button">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <a href="https://www.rilocalwoodworks.com" target="_blank" id="rilw-logo">
            <li className="top-bar-logo">
              <img 
                src="https://i.imgur.com/2j5LqFQ.jpg" 
                alt="Company Logo" 
                height="50px" 
                width="50px">
              </img>
            </li>
          </a>
          <li>
            <Link to="/">App Home</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;
