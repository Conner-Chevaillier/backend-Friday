exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("snacks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("snacks").insert([
        {
          name: "HarvestSnacks",
          description: "sweet",
          price: 400,
          img: "harvest.png"
        },
        {
          name: "BarkThins",
          description: "sweet",
          price: 400,
          img: "BArkThin.jpeg"
        },
        {
          name: "Apple",
          description: "sweet",
          price: 200,
          img: "Apple.png"
        }
      ]);
    });
};
