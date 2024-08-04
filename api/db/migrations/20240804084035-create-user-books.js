'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('UserBooks', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Users',
					key: 'id',
				},
			},
			book_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Books',
					key: 'id',
				},
			},
			borrow_date: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
			},
			return_date: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			score: {
				type: Sequelize.FLOAT,
				allowNull: true,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, _Sequelize) {
		await queryInterface.dropTable('UserBooks');
	},
};
