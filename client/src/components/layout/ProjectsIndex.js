import React, { useEffect, useState } from "react"
import ProjectTile from "./ProjectTile"

const ProjectsIndex = props => {
  
  const [projects, setProjects] = useState([])

  const fetchProjects = async () => {
    let userId = props.user.id
    try {
      const response = await fetch(`/api/v1/projects/users/${userId}`)
      if (!response) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setProjects(body.projects)
    } catch(error) {
      return console.error(`Error in fetch: ${error.message}`)
    } 
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const projectTiles = projects.map((project) => {
    return <ProjectTile key={project.id} project={project} />
  })
  

  return (
    <div className="projects-list-show-container">
      <div className="projects-index-container">
        {projectTiles}
      </div>
    </div>
  )
}

export default ProjectsIndex