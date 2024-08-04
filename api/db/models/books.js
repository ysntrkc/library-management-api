'use strict';
const {
	Model,
	Op,
} = require('sequelize');
const {default: UserBookStatuses} = require('../../enums/UserBookStatuses');
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

			Books.hasMany(models.UserBooks, {
				foreignKey: 'book_id',
				as: 'ScoredUserBooks',
				scope: {
					status_id: UserBookStatuses.RETURNED,
					score: {
						[Op.ne]: null,
					},
				},
			});

			Books.hasMany(models.UserBooks, {
				foreignKey: 'book_id',
				as: 'AllUserBooks',
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
