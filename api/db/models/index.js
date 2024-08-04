import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import process from 'process';
import config from '../config/config.js';

const db = {};
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

let sequelize;
if (config[env].use_env_variable) {
	sequelize = new Sequelize(process.env[config[env].use_env_variable], config[env]);
}
else {
	sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, config[env]);
}

fs
	.readdirSync(__dirname)
	.filter(file => {
		return (
			!file.startsWith('.') &&
      file !== basename &&
			file.endsWith('.js') &&
      file.indexOf('.test.js') === -1
		);
	})
	.forEach(file => {
		const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
		db[model.name] = model;
	},
	);

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
