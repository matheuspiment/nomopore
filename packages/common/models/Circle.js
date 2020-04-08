const { Model } = require("objection");

class Circle extends Model {
  static get tableName() {
    return "circle";
  }
}

module.exports = Circle;
