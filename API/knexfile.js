// Update with your config settings.

module.exports = {

	client: 'mysql',
	connection: {
		host: 'localhost',
		port: '3306',
		database: 'gold',
		user: 'root',
		password: 'gold'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}

};
