
exports.up = function(knex) {
    return knex.schema.createTable('travel', table => {
        table.increments('id').primary()
        table.string('pickUp').notNull()
        table.string('dest').notNull()
        table.dateTime('dateOc').notNull()
        table.string('hourOC').notNull()
        table.dateTime('dateEnd').notNull()

        table.integer('idClient').references('id')
                               .inTable('client.user')
                               .notNull()

        table.integer('idDrive').references('id')
                                .inTable('drive.user')
                                .notNull()
                                
        table.integer('idCar').references('id')
                              .inTable('car')
                              .notNull()
                            
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('travel')
};
