'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, _Sequelize) {
		await queryInterface.bulkInsert('BookStatuses', [
			{
				id: 1,
				name: 'Mevcut',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2,
				name: 'Ödünç Alındı',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		], {});
	},

	async down (queryInterface, _Sequelize) {
		await queryInterface.bulkDelete('BookStatuses', null, {});
	},
};
