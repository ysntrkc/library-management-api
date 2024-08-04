import db from '../db/models';

import {Lang} from '../localizations';

class UserService {

	static async create(req) {
		try {
			const {language} = req.headers;
			const {name} = req.body;

			await db.Users.create({
				name: name,
			});
			return {type: true, message: Lang[language].User.createSuccess};
		}
		catch (error) {
			return {type: false, message: error.message};
		}
	}

	static async getAll(req) {
		try {
			const {language} = req.headers;
			const users = await db.Users.findAll({
				attributes: [
					'id',
					'name',
				],
			});
			return {type: true, message: Lang[language].User.getAllSuccess, data: users};
		}
		catch (error) {
			return {type: false, message: error.message};
		}
	}

	static async get(req) {
		try {
			const {language} = req.headers;
			const {id} = req.params;

			const user = await db.Users.findOne({
				where: {
					id: id,
				},
				attributes: [
					'id',
					'name',
				],
				includes: [
					{
						model: db.UserBooks,
						as: 'CurrentUserBooks',
					},
					{
						model: db.UserBooks,
						as: 'ReturnedUserBooks',
					},
				],
			});
			if (!user) {
				return {type: false, message: Lang[language].User.notFound};
			}
			return {type: true, message: Lang[language].User.getSuccess, data: user};
		}
		catch (error) {
			return {type: false, message: error.message};
		}
	}

}

export default UserService;
