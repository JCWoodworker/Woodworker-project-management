import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProjectTile from "./ProjectTile"
import translateServerErrors from "../../../services/translateServerErrors"
import ErrorList from "../ErrorList"

import NewProjectForm from "./NewProjectForm"

const ProjectsIndex = props => {
  
  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState([])

  const [showNewProjectForm, setShowNewProjectForm] = useState(false)

  const userId = props.user.id
  const fetchProjects = async () => {
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

  const postNewProject = async newProjectData => {
    try {
      const response = await fetch(`/api/v1/projects/new-project`, {
        method: "POST",
        headers: new Headers ({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newProjectData)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          setErrors(newErrors)
        }
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const body = await response.json()
        setErrors([])
        setProjects([...projects, body.project])
        return true
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const projectTiles = projects.map((project) => {
    return (
      <ProjectTile 
        key={project.id} 
        project={project} 
        user={props.user} 
      />
    )
  })

  const toggleShowNewProjectForm = (event) => {
    !showNewProjectForm? setShowNewProjectForm(true) : setShowNewProjectForm(false)
  }

  let userNavigationSection = 
    <>
      <button 
        id="all-buttons"
        onClick={toggleShowNewProjectForm}>
        New Project
      </button>
      <Link to='/settings'>
        <button 
          id="all-buttons">
          User Settings
        </button>
      </Link>
      <Link to='/wood-info'>
        <button 
          id="all-buttons">
          Hardwood Info
        </button>
      </Link>
      <Link to='/dev-info'>
        <button 
          id="all-buttons">
          Developer Info
        </button>
      </Link>
    </>

  if (showNewProjectForm) {
    userNavigationSection =
    <> 
      <ErrorList errors={errors} />
      <NewProjectForm 
        postNewProject={postNewProject} 
        userId={userId}
        toggleShowNewProjectForm={toggleShowNewProjectForm}
      />
    </>
  }
  
  return (
    <div className="projects-list-container">
      <div className="projects-index-container">
        {projectTiles}
      </div>
      <div className="projects-form-container">
        {userNavigationSection}
      </div>
    </div>
  )
}

export default ProjectsIndex