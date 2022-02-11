import Project from "../../models/Project.js"

class ProjectSeeder {
  static async seed() {
    const projectData = [
      {
        name: "End Grain Cutting Board",
        description: "Black walnut, maple, oak",
        customer: "Lynn Bartlett",
        quantity: 1
      },
      {
        name: "End Grain Cutting Board",
        description: "Black limba, purple heart",
        customer: "Website",
        quantity: 1
      },
      {
        name: "Newport bridge engraving",
        description: "Photo of Newport bridge engraved in pine panel with burnt edges",
        customer: "Website",
        quantity: 3
      }
    ]

    for (const singleProject of projectData) {
      const currentProject = await Project.query().findOne(singleProject)
      if(!currentProject) {
        await Project.query().insert(singleProject)
      }
    }

  }
}

export default ProjectSeeder