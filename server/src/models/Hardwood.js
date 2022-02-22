const Model = require('./Model.js')

class Hardwood extends Model {
  static get tableName() {
    return "hardwoods"
  }

  static get relationMapping() {
    const Project = require('./Project')
    const ProjectWood = require('./ProjectWood')

    return {
      projects: {
        relation: Model.ManyToManyRelation,
        modelClass: Project,
        join: {
          from: "hardwoods.id",
          through: {
            from: "projectWoods.hardwoodId",
            to: "projectWoods.projectId",
          },
          to: "projects.id"
        }
      },
      projectWoods: {
        relation: Model.HasManyRelation,
        modelClass: ProjectWood,
        join: {
          from: "hardwoods.id",
          to: "projectWoods.hardwoodId",
          extra: {
            bf: "boardFeet"
          }
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string", minLength: 1, maxLength: 30 },
        price: { type: "float" },
        region: { type: "string" },
        jankaHardness: { type: "integer" },
        imageUrl: { type: "string" },
      }
    }
  }
  
}

module.exports = Hardwood