exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('airlines').del()
      .then(function () {
        // Inserts seed entries
        return knex('airlines').insert([
            {
                name: "Spirit",
                destinations_flown_to: ["New Zealand", "Scotland"]
              },
              {
                name: "Lufthansa",
                destinations_flown_to: ["Tristan da Cunha", "Scotland", "Thailand"]
              },
              {
                name: "Delta",
                destinations_flown_to: ["Thailand", "Minnesota", "England", "Scotland"]
              },
              {
                name: "Southwest",
                destinations_flown_to: ["New Zealand", "Tristan de Cunha", "Minnesota"]
              },
        ]);
      });
  };