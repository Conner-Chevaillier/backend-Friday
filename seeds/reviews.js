exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("reviews")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("reviews").insert([
        {
          title: "HarvestSnacks",
          text: "sweet",
          rating: 400,
          snack_id: "",
          user_id:
        },
        {
          title: "HarvestSnacks",
          text: "sweet",
          rating: 400,
          snack_id: "",
          user_id:
        },
        {
          title: "HarvestSnacks",
          text: "sweet",
          rating: 400,
          snack_id: "",
          user_id:
        },
      ]);
    });
};
