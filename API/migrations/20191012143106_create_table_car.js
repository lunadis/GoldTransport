
exports.up = function (knex) {
    return knex.schema.createTable('car', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('factory')
        table.string('type').notNull()
        table.integer('capacity').notNull()
        table.boolean('isForBag')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('car')
};
