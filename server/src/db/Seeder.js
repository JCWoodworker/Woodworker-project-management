/* eslint-disable no-console */
import { connection } from "../boot.js"
import HardwoodSeeder from "./seeders/HardwoodSeeder.js"
import ProjectSeeder from "./seeders/ProjectSeeder.js"
import UserSeeder from "./seeders/UserSeeder.js"

class Seeder {
  static async seed() {
    console.log("Seeding Users...")
    await UserSeeder.seed()

    console.log("Seeding Projects...")
    await ProjectSeeder.seed()

    console.log("Seeding Hardwoods...")
    await HardwoodSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder