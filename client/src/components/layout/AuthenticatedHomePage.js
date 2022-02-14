import React from "react"
import ProjectsIndex from "./ProjectsIndex"

const AuthenticatedHomePage = ({ user }) => {

  return (
    <div className="auth-page-container">
      <ProjectsIndex />
    </div>
  )
}

export default AuthenticatedHomePage