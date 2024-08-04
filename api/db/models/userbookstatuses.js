'use strict';
const {
	Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class UserBookStatuses extends Model {

		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			UserBookStatuses.hasMany(models.UserBooks, {
				foreignKey: 'status_id',
				as: 'UserBooks',
			});
		}

	}
	UserBookStatuses.init({
		name: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'UserBookStatuses',
	});
	return UserBookStatuses;
};
