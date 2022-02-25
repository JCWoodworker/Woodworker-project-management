import React from "react"
import ProjectsIndex from "./project-info/ProjectsIndex"

const AuthenticatedHomePage = (props) => {
  
  return (
    <div className="auth-page-container" >
      <ProjectsIndex user={props.user} />
    </div>
  )
}

export default AuthenticatedHomePage