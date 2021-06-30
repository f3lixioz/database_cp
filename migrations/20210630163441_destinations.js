
exports.up = function(knex) {
    return knex.schema.createTable(
        'destinations', table => {
            table.increments('id');
            table.string('name');
            table.float('average_temp');
            table.boolean('has_beaches');
            table.boolean('has_mountains');
            table.float('cost_of_flight');
        })
        .createTable(
            'airlines', table => {
                table.increments('id');
                table.string('name');
                table.specificType('destinations_flown_to','varchar[]');
            }
        );    
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('destinations').dropTableIfExists('airlines');
};
