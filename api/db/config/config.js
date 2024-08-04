require('dotenv').config();

module.exports = {
	development: {
		database: process.env.DATABASE_NAME,
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		host: process.env.DATABASE_HOST,
		dialect: process.env.DATABASE_DIALECT,
		logging: false,
	},
	test: {
		database: process.env.DATABASE_NAME,
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		host: process.env.DATABASE_HOST,
		dialect: process.env.DATABASE_DIALECT,
		logging: true,
	},
	preProd: {
		database: process.env.DATABASE_NAME,
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		host: process.env.DATABASE_HOST,
		dialect: process.env.DATABASE_DIALECT,
		logging: true,
	},
	prod: {
		database: process.env.DATABASE_NAME,
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		host: process.env.DATABASE_HOST,
		dialect: process.env.DATABASE_DIALECT,
		logging: false,
	},
};
