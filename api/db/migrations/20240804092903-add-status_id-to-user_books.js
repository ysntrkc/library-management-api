'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.addColumn('UserBooks', 'status_id', {
			type: Sequelize.INTEGER,
			defaultValue: 1,
			references: {
				model: 'UserBookStatuses',
				key: 'id',
			},
		});
	},

	async down (queryInterface, _Sequelize) {
		await queryInterface.removeColumn('UserBooks', 'status_id');
	},
};
