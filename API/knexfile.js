// Update with your config settings.

module.exports = {

	client: 'mysql',
	connection: {
		host: '200.219.222.25',
		port: '3306',
		database: 'gluberco_gold1',
		user: 'gluberco_luka',
		password: 'Luka@2019'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}

};
