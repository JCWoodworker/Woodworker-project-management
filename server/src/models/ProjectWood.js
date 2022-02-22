const Model = require("./Model.js")

class ProjectWood extends Model {
  static get tableName() {
    return "projectWoods"
  }

  static get relationMappings() {
    const Project = require("./Project")
    const Hardwood = require("./Hardwood")

    return {
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: "projectWoods.projectId",
          to: "projects.id"
        }
      },
      hardwood: {
        relation: Model.BelongsToOneRelation,
        modelClass: Hardwood,
        join: {
          from: "projectWoods.hardwoodId",
          to: "hardwoods.id"
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["hardwoodId", "projectId", "boardFeet"],
      properties: {
        hardwoodId: { type: ["decimal(7,2),string"] },
        projectId: { type: ["integer", "string"] },
        boardFeet: { type: ["integer", "string"] }
      }
    }
  }

}

module.exports = ProjectWood