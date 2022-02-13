class ProjectSerializer {
  static getSummary(project) {
    const allowedAttributes = ['id', 'name', 'description', 'customer', 'quantity']

    let serializedProject = {}
    for (const attribute of allowedAttributes) {
      serializedProject[attribute] = project[attribute]
    }

    return serializedProject
  }

}

export default ProjectSerializer