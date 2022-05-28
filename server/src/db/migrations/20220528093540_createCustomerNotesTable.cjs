/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("customerNotes", t => {
    t.bigIncrements("id").primary()
    t.string("date").notNullable()
    t.string("note").notNullable()
    t.bigInteger("customerId")
      .notNullable()
      .unsigned()
      .index()
      .references("customers.id")
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
};

/**
  * @param {Knex} knex
  */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("customerNotes")
};