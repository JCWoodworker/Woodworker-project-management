const Customer = require('./Customer.js')
const Model = require('./Model.js')

class CustomerNote extends Model {
  static get tableName() {
    return 'customerNotes'
  }

  static get relationMappings() {
    const Customer = require('./Customer.js')

    return {
      customer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Customer,
        join: {
          from: 'customerNotes.customerId',
          to: 'customers.id'
        }
      }
    }

  }
  
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['date', 'note'],
      properties: {
        date: { type: "string" },
        note: { type: "string" },
        customerId: { type: ['integer', 'string'] }
      }
    }  
  }

}

module.exports = CustomerNote