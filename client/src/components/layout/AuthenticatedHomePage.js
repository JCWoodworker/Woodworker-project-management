import React from "react"
import ProjectsIndex from "./ProjectsIndex"

const AuthenticatedHomePage = (props) => {
  
  return (
    <div className="auth-page-container">
      <ProjectsIndex />
    </div>
  )
}

export default AuthenticatedHomePage