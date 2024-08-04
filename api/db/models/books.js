'use strict';
const {
	Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Books extends Model {

		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			Books.belongsTo(models.BookStatuses, {
				foreignKey: 'status_id',
				as: 'Status',
			});
		}

	}
	Books.init({
		name: DataTypes.STRING,
		status_id: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'Books',
	});
	return Books;
};
