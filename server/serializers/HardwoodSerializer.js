class HardwoodSerializer {
  static getSummary(hardwood) {
    const allowedAttributes = ['id', 'name', 'price', 'region', 'jankaHardness', 'imageUrl']

    let serializedHardwood = {}
    for (const attribute of allowedAttributes) {
      serializedHardwood[attribute] = hardwood[attribute]
    }

    return serializedHardwood
  }

}

export default HardwoodSerializer