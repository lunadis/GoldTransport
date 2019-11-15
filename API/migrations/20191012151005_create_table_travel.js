
exports.up = function(knex) {
    return knex.schema.createTable('travel', table => {
        table.increments('id').primary()
        table.string('pickUp').notNull()
        table.string('dest').notNull()
        table.dateTime('dateOc').notNull()
        table.string('hourOC').notNull()
        table.dateTime('dateEnd')

        table.integer('idClient')
             .unsigned()
             .notNull()
             table.foreign('idClient')
                  .references('client.id')
        
        table.integer('idDrive')
             .unsigned()
             .notNull()
             table.foreign('idDrive')
                  .references('driver.id')

        table.integer('idCar')
             .unsigned()
             .notNull()
             table.foreign('idCar')
                  .references('car.id')
                            
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('travel')
};
