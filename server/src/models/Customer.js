const Model = require("./Model.js")

class Customer extends Model {
  static get tableName() {
    return "customers"
  }

  static get relationMappings() {
    const User = require("./User.js")
    const Project = require("./Project.js")
    const CustomerNote = require("./CustomerNote.js")

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'customers.userId',
          to: 'users.id'
        }
      },
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: 'customers.projectId',
          to: 'projects.id'
        }
      },
      customerNotes: {
        relation: Model.HasManyRelation,
        modelClass: CustomerNote,
        join: {
          from: "customers.id",
          to: "customerNotes.customerId"
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'email', 'userId'],
      properties: {
        firstName: { type: 'string' },
        email: { type: 'string' },
        cellPhone: { type: 'string', minLength: 10, maxLength: 10 },
        userId: { type: ['integer', 'string'] },
        status: { type: 'string' }
      } 
    }
  }

}

module.exports = Customer