const Model = require('./Model.js')

class Project extends Model {
  static get tableName() {
    return "projects"
  }
  
  static get relationMappings() {
    const User = require('./User')
    const Hardwood = require('./Hardwood')
    const ProjectWood = require('./ProjectWood')

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'projects.userId',
          to: 'users.id'
        }
      },
      hardwoods: {
        relation: Model.ManyToManyRelation,
        modelClass: Hardwood,
        join: {
          from: "projects.id",
          through: {
            from: "projectWoods.projectId",
            to: "projectWoods.hardwoodId"
          },
          to: "hardwoods.id"
        },
      },
      projectWoods: {
        relation: Model.HasManyRelation,
        modelClass: ProjectWood,
        join: {
          from: "projects.id",
          to: "projectWoods.projectId"
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