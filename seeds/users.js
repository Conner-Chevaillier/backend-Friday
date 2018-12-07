exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          first_name: "Conner",
          last_name: "Chevaillier",
          email: "thabiatch@yourmomma.com",
          hashed_password: "dadddy"
        },
        {
          first_name: "Sonja",
          last_name: "Chacon",
          email: "sucka@yourmomma.com",
          hashed_password: "yodadddy"
        },
        {
          first_name: "Phill",
          last_name: "Hengemuhle",
          email: "datsright@yourmomma.com",
          hashed_password: "bring it"
        },
        {
          first_name: "Andrew",
          last_name: "Pedersen",
          email: "comeatmebro@yourmomma.com",
          hashed_password: "mommalovesme"
        }
      ]);
    });
};
