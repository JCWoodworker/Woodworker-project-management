const Model = require('./Model.js')

class Project extends Model {
  static get tableName() {
    return "projects"
  }
  
  static get relationMappings() {
    const User = require('./User')

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'projects.userId',
          to: 'users.id'
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "userId"],
      properties: {
        name: { type: "string" },
        description: { type: "text" },
        customer: { type: "string" },
        quantity: { type: ["integer", "string"] },
        userId: { type: ["integer", "string"] }
      }
    }
  }
  
}

module.exports = Project