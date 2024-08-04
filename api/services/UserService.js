import db from '../db/models';

import {Lang} from '../localizations';
import BookStatuses from '../enums/BookStatuses';
import UserBookStatuses from '../enums/UserBookStatuses';

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
				include: [
					{
						model: db.UserBooks,
						as: 'CurrentUserBooks',
						separate: true,
						attributes: [
							'book_id',
							[ db.Sequelize.col('Book.name'), 'book' ],
							'borrow_date',
						],
						include: [
							{
								model: db.Books,
								attributes: [],
							},
						],
					},
					{
						model: db.UserBooks,
						as: 'ReturnedUserBooks',
						separate: true,
						attributes: [
							'book_id',
							[ db.Sequelize.col('Book.name'), 'book' ],
							'score',
							'borrow_date',
							'return_date',
						],
						include: [
							{
								model: db.Books,
								attributes: [],
							},
						],
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

	static async borrowBook(req) {
		try {
			const {language} = req.headers;
			const {user_id: userId, book_id: bookId} = req.params;

			const user = await db.Users.findOne({
				where: {
					id: userId,
				},
			});
			if (!user) {
				return {type: false, message: Lang[language].User.notFound};
			}

			const book = await db.Books.findOne({
				where: {
					id: bookId,
				},
			});
			if (!book) {
				return {type: false, message: Lang[language].Book.notFound};
			}
			if (book.status_id === BookStatuses.BORROWED) {
				return {type: false, message: Lang[language].Book.alreadyBorrowed};
			}

			await db.UserBooks.create({
				user_id: userId,
				book_id: bookId,
				borrow_date: new Date(),
			});

			book.status_id = BookStatuses.BORROWED;
			await book.save();

			return {type: true, message: Lang[language].User.borrowBookSuccess};
		}
		catch (error) {
			return {type: false, message: error.message};
		}
	}

	static async returnBook(req) {
		try {
			const {language} = req.headers;
			const {user_id: userId, book_id: bookId} = req.params;
			const {score} = req.body;

			const user = await db.Users.findOne({
				where: {
					id: userId,
				},
			});
			if (!user) {
				return {type: false, message: Lang[language].User.notFound};
			}

			const book = await db.Books.findOne({
				where: {
					id: bookId,
				},
			});
			if (!book) {
				return {type: false, message: Lang[language].Book.notFound};
			}
			if (book.status_id === BookStatuses.AVAILABLE) {
				return {type: false, message: Lang[language].Book.alreadyAvailable};
			}

			const userBook = await db.UserBooks.findOne({
				where: {
					user_id: userId,
					book_id: bookId,
				},
				order: [ [ 'id', 'DESC' ] ],
			});
			if (!userBook) {
				return {type: false, message: Lang[language].UserBook.notFound};
			}
			if (userBook.status_id === UserBookStatuses.RETURNED) {
				return {type: false, message: Lang[language].Book.alreadyReturned};
			}

			userBook.return_date = new Date();
			userBook.status_id = UserBookStatuses.RETURNED;
			if (score) {
				userBook.score = score;
			}
			await userBook.save();

			book.status_id = BookStatuses.AVAILABLE;
			await book.save();

			return {type: true, message: Lang[language].User.returnBookSuccess};
		}
		catch (error) {
			return {type: false, message: error.message};
		}
	}

}

export default UserService;
