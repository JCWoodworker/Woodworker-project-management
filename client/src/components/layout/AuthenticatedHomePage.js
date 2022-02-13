import React from "react"
import ProjectsIndex from "./ProjectsIndex"

const AuthenticatedHomePage = ({ user }) => {


  return (
    <div className="page-container">
      <h1>Welcome!</h1>
      <p>Select an active project to edit</p>
      <ProjectsIndex />
    </div>
  )
}

export default AuthenticatedHomePage