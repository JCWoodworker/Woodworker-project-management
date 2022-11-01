class CustomerSerializer {
  static async getSummary(customer) {
    const allowedAttributes = ['id', 'firstName', 'lastName', 'email', 'cellPhone', 'status']

    let serializedCustomer = {}
    for (const attribute of allowedAttributes) {
      serializedCustomer[attribute] = customer[attribute]
    }

    return serializedCustomer
  }

}

export default CustomerSerializer