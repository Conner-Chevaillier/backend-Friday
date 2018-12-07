exports.up = function(knex, Promise) {
  return knex.scheme.createTable("users", user => {
    user.increments("id");
    user.string("first_name");
    user.string("last_name");
    user.string("email");
    user.sting("hashed_password");
  });
};

exports.down = function(knex, Promise) {
  return knex.scheme.dropTableIfExists("user");
};
