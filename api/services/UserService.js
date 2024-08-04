import db from '../src/models';

import {Lang} from '../localizations';

class User {

	static async create(req) {
		try {
			const {lang} = req.headers;
			const {name} = req.body;

			await db.Users.create({
				name: name,
			});
			return {type: true, message: Lang[lang].User.createSuccess};
		}
		catch (error) {
			return {type: false, message: error.message};
		}
	}

	static async getAll(req) {
		try {
			const {lang} = req.headers;
			const users = await db.Users.findAll({
				attributes: [
					'id',
					'name',
				],
			});
			return {type: true, message: Lang[lang].User.getAllSuccess, data: users};
		}
		catch (error) {
			return {type: false, message: error.message};
		}
	}

	static async get(req) {
		try {
			const {lang} = req.headers;
			const {id} = req.params;

			const user = await db.Users.findOne({
				where: {
					id: id,
				},
				attributes: [
					'id',
					'name',
				],
			});
			if (!user) {
				return {type: false, message: Lang[lang].User.notFound};
			}
			return {type: true, message: Lang[lang].User.getSuccess, data: user};
		}
		catch (error) {
			return {type: false, message: error.message};
		}
	}

}

export default User;
