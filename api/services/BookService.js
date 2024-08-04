import db from '../db/models';

import {Lang} from '../localizations';

class BookService {

	static async create(req) {
		try {
			const {language} = req.headers;
			const {name} = req.body;

			await db.Books.create({
				name: name,
			});
			return {type: true, message: Lang[language].Book.createSuccess};
		}
		catch (error) {
			return {type: false, message: error.message};
		}
	}

	static async getAll(req) {
		try {
			const {language} = req.headers;
			const books = await db.Books.findAll({
				attributes: [
					'id',
					'name',
					[ db.Sequelize.literal(`
							CASE
								WHEN "status_id" = 1 THEN '${Lang[language].BookStatuses[1]}'
								WHEN "status_id" = 2 THEN '${Lang[language].BookStatuses[2]}'
							END
					`), 'status' ],
				],
			});
			return {type: true, message: Lang[language].Book.getAllSuccess, data: books};
		}
		catch (error) {
			return {type: false, message: error.message};
		}
	}

	static async get(req) {
		try {
			const {language} = req.headers;
			const {id} = req.params;

			const book = await db.Books.findOne({
				where: {
					id: id,
				},
				attributes: [
					'id',
					'name',
					[ db.Sequelize.literal(`
							CASE
								WHEN "status_id" = 1 THEN '${Lang[language].BookStatuses[1]}'
								WHEN "status_id" = 2 THEN '${Lang[language].BookStatuses[2]}'
							END
					`), 'status' ],
				],
			});
			if (!book) {
				return {type: false, message: Lang[language].Book.notFound};
			}

			return {type: true, message: Lang[language].Book.getSuccess, data: book};
		}
		catch (error) {
			return {type: false, message: error.message};
		}
	}

}

export default BookService;
