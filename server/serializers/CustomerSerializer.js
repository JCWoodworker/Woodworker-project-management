class CustomerSerializer {
  static async getSummary(customer) {
    const allowedAttributes = ['id', 'firstName', 'lastName', 'email', 'cellPhone', 'prospect', 'negotiating', 'commissioned', 'delivered', 'cancelled']

    let serializedCustomer = {}
    for (const attribute of allowedAttributes) {
      serializedCustomer[attribute] = customer[attribute]
    }

    return serializedCustomer
  }

}

export default CustomerSerializer