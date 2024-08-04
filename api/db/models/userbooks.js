'use strict';
const {
	Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class UserBooks extends Model {

		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			UserBooks.belongsTo(models.UserBookStatuses, {
				foreignKey: 'status_id',
				as: 'Status',
			});
			UserBooks.belongsTo(models.Users, {
				foreignKey: 'user_id',
			});
			UserBooks.belongsTo(models.Books, {
				foreignKey: 'book_id',
			});
		}

	}
	UserBooks.init({
		user_id: DataTypes.INTEGER,
		book_id: DataTypes.INTEGER,
		borrow_date: DataTypes.DATE,
		return_date: DataTypes.DATE,
		score: DataTypes.FLOAT,
		status_id: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'UserBooks',
	});
	return UserBooks;
};
