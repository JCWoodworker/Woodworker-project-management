import Customer from "../../models/Customer.js";

class CustomerSeeder {
  static async seed() {
    const customerData = [
      {
        firstName: "James",
        lastName: "Smith",
        email: "james@smith.com",
        cellPhone: '4014840848',
        status: "prospect",
        projectId: null,
        userId: 1,
      },
      {
        firstName: "John",
        lastName: "Doe",
        email: "john@doe.com",
        cellPhone: '4014840848',
        status: "prospect",
        projectId: null,
        userId: 1,
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane@doe.com",
        cellPhone: '4014840848',
        status: "prospect",
        projectId: null,
        userId: 2,
      },
      {
        firstName: "John",
        lastName: "Smith",
        email: "john@smith.com",
        cellPhone: '4014840848',
        status: "prospect",
        projectId: null,
        userId: 2,
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@smith.com",
        cellPhone: '4014840848',
        status: "prospect",
        projectId: null,
        userId: 3,
      },
      {
        firstName: "John",
        lastName: "Johnson",
        email: "john@johnson.com",
        cellPhone: '4014840848',
        status: "prospect",
        projectId: null,
        userId: 3,
      }
    ]

    for (const singleCustomer of customerData) {
      const currentCustomer = await Customer.query().findOne(singleCustomer)
      if (!currentCustomer) {
        await Customer.query().insert(singleCustomer)
      }
    }

  }

}

export default CustomerSeeder