'use strict';
const {
	Model,
} = require('sequelize');

const {default: UserBookStatuses} = require('../../enums/UserBookStatuses');

module.exports = (sequelize, DataTypes) => {
	class Users extends Model {

		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			Users.hasMany(models.UserBooks, {
				foreignKey: 'user_id',
				as: 'CurrentUserBooks',
				scope: {
					status_id: UserBookStatuses.BORROWED,
				},
			});

			Users.hasMany(models.UserBooks, {
				foreignKey: 'user_id',
				as: 'ReturnedUserBooks',
				scope: {
					status_id: UserBookStatuses.RETURNED,
				},
			});
		}

	}
	Users.init({
		name: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'Users',
	});
	return Users;
};
