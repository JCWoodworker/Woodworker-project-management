/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model.js");

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email"],
  identifiers: ["id"],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get relationMappings() {
    const Project = require('./Project.js')
    
    return {
      projects: {
        relation: Model.HasManyRelation,
        modelClass: Project,
        join: {
          from: 'users.id',
          to: 'projects.userId'
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "admin"],

      properties: {
        email: { type: "string", format: "email" },
        cryptedPassword: { type: "string" },
        admin: { type: "boolean"},
        woodWaste: { type: ["integer", "string"] },
        markup: { type: ["integer", "string"] },
        laborRate: { type: ["integer", "string"] },
      },
    }

  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }
}

module.exports = User;
