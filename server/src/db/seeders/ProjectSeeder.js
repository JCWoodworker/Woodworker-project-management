import Project from "../../models/Project.js"

class ProjectSeeder {
  static async seed() {
    const projectData = [
      {
        name: "End Grain Cutting Board",
        description: "Black walnut, maple, oak",
        customer: "Lynn B",
        quantity: 1,
        userId: 1,
        hours: 4
      },
      {
        name: "End Grain Cutting Board",
        description: "Black limba, purple heart",
        customer: "Website",
        quantity: 2,
        userId: 1,
        hours: 4,
        hours: 4
      },
      {
        name: "Newport Bridge Engraving",
        description: "Photo of Newport bridge engraved in pine panel with burnt edges",
        customer: "Website",
        quantity: 5,
        userId: 1,
        hours: 4
      },
      {
        name: "Long Grain Cutting Board",
        description: "Peruvian walnut, canarywood",
        customer: "website",
        quantity: 10,
        userId: 1,
        hours: 4
      },
      {
        name: "Gansett Towers Engraving",
        description: "Photo of Narragansett Towers engraved in pine panel with burnt edges",
        customer: "Website",
        quantity: 5,
        userId: 1,
        hours: 4
      },
      {
        name: "Point Judith Lighthouse Engraving",
        description: "Photo of Point Judith lighthouse engraved in pine panel with burnt edges",
        customer: "Website",
        quantity: 5,
        userId: 1,
        hours: 4
      },
      {
        name: "Charcuterie Paddles",
        description: "Black walnut, ambrosia maple, square with handle",
        customer: "Foolproof Brewery",
        quantity: 1,
        userId: 2,
        hours: 4
      },
      {
        name: "End Grain Cutting Board",
        description: "Black limba, red heart, maple, with juice groove, beveled bottom edges",
        customer: "Mark S.",
        quantity: 2,
        userId: 2,
        hours: 4
      },
      {
        name: "Ocean Waves Engraving",
        description: "Photo of ocean waves engraved in pine panel with burnt edges",
        customer: "Frills of Galilee",
        quantity: 5,
        userId: 2,
        hours: 4
      },
      {
        name: "Long Grain Cutting Board",
        description: "Peruvian walnut, maple, with juice groove and hand holds underneath",
        customer: "website",
        quantity: 10,
        userId: 2,
        hours: 4
      },
      {
        name: "Long Grain Cutting Board",
        description: "Black Walnut, purple heart, with bowtie inlay in top-left corner",
        customer: "Website",
        quantity: 5,
        userId: 2,
        hours: 4
      },
      {
        name: "Engraved Quote Hangers",
        description: "Maple boards with various quotes engraved",
        customer: "Frills Of Galilee",
        quantity: 5,
        userId: 2,
        hours: 4
      },
      {
        name: "End Grain Cutting Board",
        description: "Reclaimed oak from staves of Woodford Reserve barrel",
        customer: "Bryan A",
        quantity: 1,
        userId: 3,
        hours: 4
      },
      {
        name: "End Grain Cutting Board",
        description: `Mahogany, cherry, engraved with "Max & Amy 10-25-2022"`,
        customer: "Jeff S",
        quantity: 1,
        userId: 3,
        hours: 4
      },
      {
        name: "Newport Bridge Engraving",
        description: "Photo of Newport bridge engraved in pine panel with burnt edges",
        customer: "John F",
        quantity: 1,
        userId: 3,
        hours: 4
      },
      {
        name: "Long Grain Cutting Board",
        description: "Ambrosia maple, curly maple, with simulated live edges",
        customer: "website",
        quantity: 5,
        userId: 3,
        hours: 4
      },
      {
        name: "Charcuterie Board",
        description: "Aromatic red cedar, chrome boat cleat handles.",
        customer: "Website",
        quantity: 5,
        userId: 3,
        hours: 4
      },
      {
        name: "Engraved Sign",
        description: `"Home Sweet Home" engraved in reclaimed oak from rum barrel`,
        customer: "Ann L",
        quantity: 1,
        userId: 3,
        hours: 4
      },
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