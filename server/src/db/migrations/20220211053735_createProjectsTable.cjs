/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("projects", t => {
    t.bigIncrements('id')
    t.string('name').notNullable()
    t.text('description')
    t.string('customer')
    t.integer('quantity')
    t.integer('hours').notNullable()
    t.bigInteger('userId')
      .notNullable()
      .unsigned()
      .index()
      .references('users.id')
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('projects')
}
