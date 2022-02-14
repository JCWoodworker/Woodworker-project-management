import User from "../../models/User.js";

class UserSeeder {
  static async seed() {
    const userData = [
      {
        email: "testuser1@test.com",
        cryptedPassword: "$2b$10$A3BT.uT3E0toGYCbbGs4oe2iEfK5.tqAbTb95VXnF1o5N/P7eW9.G"
      },
      {
        email: "testuser2@test.com",
        cryptedPassword: "$2b$10$A3BT.uT3E0toGYCbbGs4oe2iEfK5.tqAbTb95VXnF1o5N/P7eW9.G"
      },
      {
        email: "testuser3@test.com",
        cryptedPassword: "$2b$10$A3BT.uT3E0toGYCbbGs4oe2iEfK5.tqAbTb95VXnF1o5N/P7eW9.G"
      },
    ]

    for (const singleUser of userData) {
      const currentUser = await User.query().findOne(singleUser)
      if (!currentUser) {
        await User.query().insert(singleUser)
      }
    }

  }

}

export default UserSeeder