const Model = require("./Model.js")

class ProjectImage extends Model {
  static get tableName() {
    return "projectImages"
  }

  static get relationMappings() {
    const Project = require("./Project.js")

    return {
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: "projectImages.projectId",
          to: "projects.Id"
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "image", "projectId"],
      properties: {
        title: { type: "string" },
        image: { type: "string" },
        projectId: { type: ["integer", "string"] }
      }
    }
  }
}

module.exports = ProjectImage