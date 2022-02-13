const Model = require('./Model.js')

class Hardwood extends Model {
  static get tableName() {
    return "hardwoods"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
        price: { type: "float" },
        region: { type: "string" },
        jankaHardness: { type: "integer" },
        imageUrl: { type: "string" },
      }
    }
  }
  
}

module.exports = Hardwood