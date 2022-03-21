const Model = require("./Model")

class ProjectImage extends Model {
  static get tableName() {
    return "projectImages"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "image"],
      properties: {
        title: { type: "string" },
        image: { type: "string" },
      }
    }
  }
}

module.exports = ProjectImage