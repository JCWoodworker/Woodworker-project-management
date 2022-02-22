import ProjectWood from "../../models/ProjectWood.js"

class ProjectWoodsSeeder {
  static async seed() {
    
    let projectWoodsData = []
    for (let i=1; i < 19; i ++) {
      projectWoodsData.push({
        hardwoodId: i,
        projectId: i,
        boardFeet: 1
      })
      projectWoodsData.push({
        hardwoodId: i + 1,
        projectId: i,
        boardFeet: 2
      })
    }

    for (const singleProjectWood of projectWoodsData) {
      const currentProjectWood = await ProjectWood.query().findOne(singleProjectWood)
      if (!currentProjectWood) {
        await ProjectWood.query().insert(singleProjectWood)
      }
    }
    
    // [
    //   {
    //     boardFeet: 1,
    //     hardwoodId: 1,
    //     projectId: 2
    //   },
    // ]
  }
}

export default ProjectWoodsSeeder