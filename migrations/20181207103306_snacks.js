exports.up = function(knex, Promise) {
  return knex.schema.createTable("snacks", snack => {
    snack.increments("id");
    snack.string("name");
    snack.string("description");
    snack.decimal("price");
    snack.string("img");
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("snacks");
};
