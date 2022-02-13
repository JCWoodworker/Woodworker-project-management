import React from "react"

const ProjectsIndex = props => {

  const getProjects = await fetch('/api/v1/projects')
  

  return (
    <h1>Choose a project to work on</h1>
  )
}

export default ProjectsIndex