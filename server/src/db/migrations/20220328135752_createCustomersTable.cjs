/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  knex.schema.createTable('customers', t => {
    t.bigIncrements('id').notNullable()
    t.string('firstName').notNullable()
    t.string('lastName')
    t.string('email')
    t.boolean('prospect').notNullable().defaultTo(true)
    t.boolean('negotiating').notNullable().defaultTo(false)
    t.boolean('commissioned').notNullable().defaultTo(false)
    t.boolean('cancelled').notNullable().defaultTo(false)
    t.boolean('delivered').notNullable().defaultTo(false)
    t.bigInteger('projectId')
      .unsigned()
      .index()
      .references('projects.id')
    t.bigInteger('userId')
      .notNullable()
      .unsigned()
      .index()
      .references('users.id ')
    t.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
    t.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now())
  })
};

/**
  * @param {Knex} knex
  */
exports.down = async (knex) => {
  knex.schema.dropTableIfExists("customers")
};