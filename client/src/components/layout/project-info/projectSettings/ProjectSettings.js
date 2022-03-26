import React from "react"
import ProjectSettingsForm from "./ProjectSettingsForm"

const ProjectSettings = props => {

  return (
    <div className="project-settings-container">
      <div>
        <h1>Project Settings</h1>
        <ProjectSettingsForm
          handleShowProjectSettingsForm={handleShowProjectSettingsForm}
        />
      </div>
    </div>
  )
}

export default ProjectSettings