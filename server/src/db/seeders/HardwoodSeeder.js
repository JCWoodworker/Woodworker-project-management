import Hardwood from "../../models/Hardwood.js"

class HardwoodSeeder {
  static async seed() {
    const hardwoodData = [
      {
        name: "Hard Maple",
        price: "6.25",
        region: "Northeastern North America",
        jankaHardness: 1450,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/quercus-rubra-225x450.jpg"
      },
      {
        name: "Black Walnut",
        price: "17.95",
        region: "Eastern US",
        jankaHardness: 1010,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/black-walnut-200x200.jpg"
      },
      {
        name: "Purple Heart",
        price: "9.6",
        region: "Central & South America",
        jankaHardness: 2520,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/purpleheart-three-weeks-200x200.jpg"
      },
      {
        name: "Zebrawood",
        price: "17.5",
        region: "West Africa",
        jankaHardness: 1450,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/zebrawood-200x200.jpg"
      },
      {
        name: "Red Oak",
        price: "8.95",
        region: "Northeastern US & Southeastern Canada",
        jankaHardness: 1450,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/quercus-rubra-225x450.jpg"
      },
      {
        name: "Wenge",
        price: "18.95",
        region: "Central Africa",
        jankaHardness: 1450,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/millettia-laurentii-225x450.jpg"
      },
      {
        name: "Peruvian Walnut",
        price: "10.95",
        region: "Southern Mexico, Central and South America",
        jankaHardness: 960,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/peruvian-walnut.jpg"
      },
      {
        name: "Black Limba",
        price: "12.95",
        region: "Tropical Western Africa",
        jankaHardness: 670,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/black-limba.jpg"
      },
      {
        name: "Olivewood",  
        price: "18.95",
        region: "Europe and Eastern Africa",
        jankaHardness: 2700,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/olive.jpg"
      },
      {
        name: "Canarywood",  
        price: "14.95",
        region: "South America",
        jankaHardness: 1520,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/canarywood-jh.jpg"
      },
    ]

    for (const singleHardwood of hardwoodData) {
      const currentHardwood = await Hardwood.query().findOne(singleHardwood)
      if(!currentHardwood) {
        await Hardwood.query().insert(singleHardwood)
      }
    }

  }
}

export default HardwoodSeeder