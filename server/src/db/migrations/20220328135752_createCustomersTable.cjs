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
    t.string('status').defaultTo('prospect')
    t.bigInteger('projectId')
      .unsigned()
      .index()
      .references('projects.id')
      .onDelete('CASCADE')
      t.bigInteger('userId')
      .notNullable()
      .unsigned()
      .index()
      .references('users.id ')
      .onDelete('CASCADE')
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