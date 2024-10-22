
exports.up = function (knex) {
    return knex.schema.createTable('driver', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('doc').notNull().unique()
        table.string('phone').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('driver')
};
