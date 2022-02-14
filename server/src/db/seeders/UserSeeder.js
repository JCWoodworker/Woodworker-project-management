import User from "../../models/User.js";

class UserSeeder {
  static async seed() {
    const userData = [
      {
        email: "user1@test.com",
        cryptedPassword: "$2b$10$1mZuD.3ac8rDukajr54TzeyQXriKC7berLu/nOuu4MKzQ10heRfn6"
      },
      {
        email: "user2@test.com",
        cryptedPassword: "$2b$10$1mZuD.3ac8rDukajr54TzeyQXriKC7berLu/nOuu4MKzQ10heRfn6"
      },
      {
        email: "user3@test.com",
        cryptedPassword: "$2b$10$1mZuD.3ac8rDukajr54TzeyQXriKC7berLu/nOuu4MKzQ10heRfn6"
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