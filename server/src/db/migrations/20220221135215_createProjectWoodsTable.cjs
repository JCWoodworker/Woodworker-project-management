/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("projectWoods", t => {
    t.bigIncrements('id').notNullable()
    t.decimal('boardFeet',7,2).notNullable()
    t
      .bigInteger("hardwoodId")
      .notNullable()
      .unsigned()
      .index()
      .references("hardwoods.id")
    t
      .bigInteger("projectId")
      .notNullable()
      .unsigned()
      .index()
      .references("projects.id")
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())  
  })

}

/**
  * @param {Knex} knex
  */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("projectWoods")
}