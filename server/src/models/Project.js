const Model = require('./Model.js')

class Project extends Model {
  static get tableName() {
    return "projects"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
        description: { type: "text" },
        customer: { type: "string" },
        quantity: { type: "integer" },
      }
    }
  }
  
}

module.exports = Project