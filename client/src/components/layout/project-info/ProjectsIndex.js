import React, { useEffect, useState } from "react"
import ProjectTile from "./ProjectTile"
import NewProjectForm from "./NewProjectForm"
import translateServerErrors from "../../../services/translateServerErrors"
import ErrorList from "../ErrorList"

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

  const deleteProject = async (projectId) => {    
    try {
      const response = await fetch(`/api/v1/projects`, {
        method: "DELETE",
        headers: new Headers ({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({projectId: projectId})
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const body = await response.json()
        debugger
      }
    } catch (error) {
      console.error(`Error in DELETE: ${error.message}`)
    }
  }

  const projectTiles = projects.map((project) => {
    return (
      <ProjectTile 
        key={project.id} 
        project={project} 
        user={props.user} 
        deleteProject={deleteProject}
      />
    )
  })

  const toggleShowNewProjectForm = (event) => {
    !showNewProjectForm? setShowNewProjectForm(true) : setShowNewProjectForm(false)
  }
  const toggleShowUserSettingsForm = (event) => {
    !showNewProjectForm? setShowNewProjectForm(true) : setShowNewProjectForm(false)
  }

  let newProjectForm = 
    <>
      <button 
        id="all-buttons"
        onClick={toggleShowNewProjectForm}>
        New Project
      </button>
      {/* <button 
        id="all-buttons"
        onClick={toggleShowUserSettingsForm}>
        User Settings
      </button> */}
    </>

  if (showNewProjectForm) {
    newProjectForm =
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
        {newProjectForm}
      </div>
    </div>
  )
}

export default ProjectsIndex