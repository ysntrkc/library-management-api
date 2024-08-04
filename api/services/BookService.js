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
					[
						db.Sequelize.literal(`
							CASE
								WHEN "Status"."id" = 1 THEN '${Lang[language].BookStatuses[1]}'
								WHEN "Status"."id" = 2 THEN '${Lang[language].BookStatuses[2]}'
							END`),
						'status',
					],
					[
						db.Sequelize.literal(
							'CAST(AVG("ScoredUserBooks"."score") AS DECIMAL(10, 2))',
						), 'average_score',
					],
					[
						db.Sequelize.fn('COUNT',
							db.Sequelize.fn('DISTINCT', db.Sequelize.col('ScoredUserBooks.user_id')),
						), 'users_rated',
					],
					[
						db.Sequelize.fn('COUNT',
							db.Sequelize.col('AllUserBooks.id'),
						), 'times_borrowed',
					],
					[
						db.Sequelize.fn('COUNT',
							db.Sequelize.fn('DISTINCT', db.Sequelize.col('AllUserBooks.user_id')),
						), 'users_borrowed',
					],
				],
				include: [
					{
						model: db.BookStatuses,
						as: 'Status',
						attributes: [],
					},
					{
						model: db.UserBooks,
						as: 'ScoredUserBooks',
						attributes: [],
					},
					{
						model: db.UserBooks,
						as: 'AllUserBooks',
						attributes: [],
					},
				],
				group: [
					'Books.id',
					'Status.id',
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
