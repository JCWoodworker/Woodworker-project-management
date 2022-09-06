/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("projectImages", t => {
    t.bigIncrements("id").primary()
    t.string("title").notNullable()
    t.string("image").notNullable()
    t.bigInteger("projectId")
      .notNullable()
      .unsigned()
      .index()
      .references("projects.id")
      .onDelete('CASCADE')
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("projectImages")
}
