
exports.up = function(knex) {
    return knex.schema.createTable(
    'destinations', table => {
        table.increments('id');
        table.string('name');
        table.float('average_temp');
        table.boolean('has_beaches');
        table.boolean('has_mountains');
        table.float('cost_of_flight');
    },
    'airlines', table => {
        table.increments('id');
        table.string('name');
        table.string(['destinations_flown_to']);
    }
    );
    
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('destinations','airlines');
};
