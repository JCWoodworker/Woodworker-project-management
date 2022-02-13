import React from "react"
import ProjectsIndex from "./ProjectsIndex"

const AuthenticatedHomePage = ({ user }) => {


  return (
    <div className="page-container">
      <h1>Welcome to your home page {user}!</h1>
      <p>Soon you'll be able to add new projects and manage them from here!</p>
    </div>
  )
}

export default AuthenticatedHomePage