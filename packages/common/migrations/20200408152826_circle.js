exports.up = function (knex) {
  return knex.createTable("circle", (table) => {
    table.increments("id").primary();
    table.string("name").notNull();
    table.string("description").notNull();
  });
};

exports.down = function (knex) {
  return knex.dropTable("circle");
};
