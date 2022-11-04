import CustomerNote from "../../models/CustomerNote.js";

class CustomerNotesSeeder {
  static async seed() {
    const customerNotesData = [
      {
        date: "11/1 @ 18:33:36",
        note: "James likes to play golf",
        customerId: 1
      },
      {
        date: "11/1 @ 18:33:36",
        note: "John LOVES mahogany",
        customerId: 2
      },
      {
        date: "11/1 @ 18:33:36",
        note: "Jane has three kids and a dog",
        customerId: 3
      },
      {
        date: "11/1 @ 18:33:36",
        note: "John is a big fan of the Patriots",
        customerId: 4
      },
      {
        date: "11/1 @ 18:33:36",
        note: "Jane hates curly maple",
        customerId: 5
      },
      {
        date: "11/1 @ 18:33:36",
        note: "John is thinking about putting a bar in his basement in the future",
        customerId: 6
      }
    ]

    for (const singleCustomerNote of customerNotesData) {
      const currentCustomerNote = await CustomerNote.query().findOne(singleCustomerNote)
      if (!currentCustomerNote) {
        await CustomerNote.query().insert(singleCustomerNote)
      }
    }
  }

}

export default CustomerNotesSeeder