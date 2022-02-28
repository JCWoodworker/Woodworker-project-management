class AdminProjectWoodSerializer {
  static async getSummary(projectWood) {
    const allowedAttributes = ['hardwood', 'boardFeet']

    let serializedProjectWood = {}
    for (const attribute of allowedAttributes) {
      serializedProjectWood[attribute] = projectWood[attribute]
    }

    return serializedProjectWood
  }

}

export default AdminProjectWoodSerializer