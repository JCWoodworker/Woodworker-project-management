/* eslint-disable no-console */
import { connection } from "../boot.js"
import HardwoodSeeder from "./seeders/HardwoodSeeder.js"
import ProjectSeeder from "./seeders/ProjectSeeder.js"
import UserSeeder from "./seeders/UserSeeder.js"
import ProjectWoodsSeeder from "./seeders/ProjectWoodsSeeder.js"
import CustomerSeeder from "./seeders/CustomerSeeder.js"
import CustomerNotesSeeder from "./seeders/CustomerNotesSeeder.js"
class Seeder {
  static async seed() {
    console.log("Seeding Users...")
    await UserSeeder.seed()

    console.log("Seeding Projects...")
    await ProjectSeeder.seed()

    console.log("Seeding Hardwoods...")
    await HardwoodSeeder.seed()

    console.log("Seeding ProjectWoods...")
    await ProjectWoodsSeeder.seed()

    console.log("Seeding Customers...")
    await CustomerSeeder.seed()

    console.log("Seeding Customer Notes...")
    await CustomerNotesSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder