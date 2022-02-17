import Hardwood from "../../models/Hardwood.js"

class HardwoodSeeder {
  static async seed() {
    const hardwoodData = [
      {
        name: "Maple",
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
      {
        name: "Osage Orange",  
        price: "14.95",
        region: "South-Central US",
        jankaHardness: 2620,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/osage-orange.jpg"
      },
      {
        name: "Maple (Curly)",  
        price: "7.75",
        region: "North America",
        jankaHardness: 1000,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/acer-spp-curly.jpg"
      },
      {
        name: "Maple (Birdseye)",  
        price: "8.75",
        region: "North America",
        jankaHardness: 1000,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/acer-spp-birdseye.jpg"
      },
      {
        name: "Maple (Ambrosia)",  
        price: "4.75",
        region: "North America",
        jankaHardness: 800,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/acer-spp-ambrosia.jpg"
      },
      {
        name: "White Oak",  
        price: "8.95",
        region: "Eastern US",
        jankaHardness: 1350,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/quercus-rubra.jpg"
      },
      {
        name: "Spanish Cedar",  
        price: "8.95",
        region: "Centran & South America, The Caribbean",
        jankaHardness: 600,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/spanish-cedar.jpg"
      },
      {
        name: "Aromatic Red Cedar",  
        price: "",
        region: "Eastern North America",
        jankaHardness: 0,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/aromatic-red-cedar.jpg"
      },
      {
        name: "Lacewood",  
        price: "",
        region: "Tropical South America",
        jankaHardness: 840,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/brazilian-lacewood.jpg"
      },
      {
        name: "Cumaru",  
        price: "8.50",
        region: "Northern South America",
        jankaHardness: 3330,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/cumaru.jpg"
      },
      {
        name: "Red Heart",  
        price: "",
        region: "",
        jankaHardness: 0,
        imageUrl: ""
      },
      {
        name: "Yellow Heart",  
        price: "",
        region: "",
        jankaHardness: 0,
        imageUrl: ""
      },
      {
        name: "Padauk",  
        price: "",
        region: "",
        jankaHardness: 0,
        imageUrl: ""
      },
      {
        name: "Lati",  
        price: "",
        region: "",
        jankaHardness: 0,
        imageUrl: ""
      },
      {
        name: "Teak",  
        price: "",
        region: "",
        jankaHardness: 0,
        imageUrl: ""
      },
      {
        name: "Mahogany (Honduran)",  
        price: "",
        region: "",
        jankaHardness: 0,
        imageUrl: ""
      },
      {
        name: "Sapele",  
        price: "",
        region: "",
        jankaHardness: 0,
        imageUrl: ""
      },
      {
        name: "Bloodwood",  
        price: "",
        region: "",
        jankaHardness: 0,
        imageUrl: ""
      },
      {
        name: "Cherry",  
        price: "",
        region: "",
        jankaHardness: 0,
        imageUrl: ""
      },
      {
        name: "Goncalo Alves",  
        price: "",
        region: "",
        jankaHardness: 0,
        imageUrl: ""
      },
      {
        name: "Leopardwood",  
        price: "",
        region: "",
        jankaHardness: 0,
        imageUrl: ""
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