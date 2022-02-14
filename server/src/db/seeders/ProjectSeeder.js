import Project from "../../models/Project.js"

class ProjectSeeder {
  static async seed() {
    const projectData = [
      {
        name: "End Grain Cutting Board",
        description: "Black walnut, maple, oak",
        customer: "Lynn Bartlett",
        quantity: 1,
        userId: 1
      },
      {
        name: "End Grain Cutting Board",
        description: "Black limba, purple heart",
        customer: "Website",
        quantity: 2,
        userId: 1
      },
      {
        name: "Newport Bridge Engraving",
        description: "Photo of Newport bridge engraved in pine panel with burnt edges",
        customer: "Website",
        quantity: 5,
        userId: 2
      },
      {
        name: "Long Grain Cutting Board",
        description: "Peruvian walnut, canarywood",
        customer: "website",
        quantity: 10,
        userId: 2
      },
      {
        name: "Gansett Towers Engraving",
        description: "Photo of Narragansett Towers engraved in pine panel with burnt edges",
        customer: "Website",
        quantity: 5,
        userId: 3
      },
      {
        name: "Point Judith Lighthouse Eengraving",
        description: "Photo of Point Judith lighthouse engraved in pine panel with burnt edges",
        customer: "Website",
        quantity: 5,
        userId: 3
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