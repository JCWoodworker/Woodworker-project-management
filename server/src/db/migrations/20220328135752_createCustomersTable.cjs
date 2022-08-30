/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('customers', t => {
    t.bigIncrements('id')
    t.string('firstName').notNullable()
    t.string('lastName')
    t.string('email').notNullable()
    t.string('cellPhone')
    t.boolean('prospect').defaultTo(true)
    t.boolean('negotiating').defaultTo(false)
    t.boolean('commissioned').defaultTo(false)
    t.boolean('cancelled').defaultTo(false)
    t.boolean('delivered').defaultTo(false)
    t.bigInteger('projectId')
      .unsigned()
      .index()
      .references('projects.id')
      .onDelete('CASCADE')
      t.bigInteger('userId')
      .notNullable()
      .unsigned()
      .index()
      .onDelete('CASCADE')
      .references('users.id ')
    t.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
    t.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now())
  })
};

/**
  * @param {Knex} knex
  */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("customers")
};