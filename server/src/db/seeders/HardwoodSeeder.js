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
        region: "Southern Mexico, Central & South America",
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
        region: "Europe & Eastern Africa",
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
        region: "South Central US",
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
        price: "18.95",
        region: "Southern Mexico to Southern Brazil & Paraguay",
        jankaHardness: 1210,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/redheart.jpg"
      },
      {
        name: "Yellow Heart",  
        price: "10.50",
        region: "Brazil",
        jankaHardness: 1790,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/yellowheart.jpg"
      },
      {
        name: "Padauk",  
        price: "10.95",
        region: "Central & Tropical West Africa",
        jankaHardness: 1970,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/padauk.jpg"
      },
      {
        name: "Lati",  
        price: "9.75",
        region: "Central & West Africa",
        jankaHardness: 1200,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/amphimas-pterocarpoides.jpg"
      },
      {
        name: "Teak",  
        price: "29.95",
        region: "Southern Asia.  Also Grown in Tropical Regions of Africa, Asia, & Latin America",
        jankaHardness: 1070,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/tectona-grandis.jpg"
      },
      {
        name: "Mahogany (Honduran)",  
        price: "8.95",
        region: "Southern Mexico to Central South America",
        jankaHardness: 900,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/swietenia-macrophylla-fs.jpg"
      },
      {
        name: "Sapele",  
        price: "8.75",
        region: "Tropical Africa",
        jankaHardness: 1410,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/sapele.jpg"
      },
      {
        name: "Cherry",  
        price: "7.25",
        region: "Eastern North America",
        jankaHardness: 950,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/prunus-serotina.jpg"
      },
      {
        name: "Goncalo Alves",  
        price: "14.95",
        region: "Mexico to Brazil",
        jankaHardness: 2170,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/goncalo-alves1.jpg"
      },
      {
        name: "Leopardwood",  
        price: "14.95",
        region: "Central & South America",
        jankaHardness: 2150,
        imageUrl: "https://www.wood-database.com/wp-content/uploads/leopardwood.jpg"
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