import React from "react"
import ProjectsIndex from "./ProjectsIndex"

const AuthenticatedHomePage = ({ user }) => {

  return (
    <div className="home-page-container">
      <ProjectsIndex />
    </div>
  )
}

export default AuthenticatedHomePage