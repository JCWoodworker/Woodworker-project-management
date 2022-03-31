const Model = require("./Model.js")

class Customer extends Model {
  static get tableName() {
    return "customers"
  }

  static get relationMappings() {
    const User = require("./User")
    const Project = require("./Project")

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
        prospect: { type: 'boolean' },
        negotiation: { type: 'boolean' },
        commissioned: { type: 'boolean' },
        cancelled: { type: 'boolean' },
        delivered: { type: 'boolean' },
      } 
    }
  }

}

module.exports = Customer