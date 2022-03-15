class ProjectSerializer {
  static async getSummary(project) {
    const allowedAttributes = ['id', 'name', 'description', 'customer', 'quantity', 'hours', 'userId']

    let serializedProject = {}
    for (const attribute of allowedAttributes) {
      serializedProject[attribute] = project[attribute]
    }
    serializedProject.selectedWoods = await project.$relatedQuery("hardwoods")

    return serializedProject
  }

}

export default ProjectSerializer