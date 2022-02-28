class AdminProjectSerializer {
  static async getSummary(project) {
    const allowedAttributes = ['name', 'description']
    
    let serializedProject = {}
    for (const attribute of allowedAttributes) {
      serializedProject[attribute] = project[attribute]
    }
    return serializedProject
  }

}

export default AdminProjectSerializer