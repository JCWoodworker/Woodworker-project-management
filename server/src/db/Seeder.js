/* eslint-disable no-console */
import { connection } from "../boot.js"
import ProjectSeeder from "./seeders/ProjectSeeder.js"

class Seeder {
  static async seed() {
    console.log("Seeding Projects...")
    await ProjectSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder