/**
 * @typedef CreateBook
 * @property {string} name.required
 */

import BookSevice from '../services/BookService';
import BookValidation from '../validations/BookValidation';
import ResponseHelper from '../helpers/ResponseHelper';
import ResponseTypes from '../enums/ResponseTypes';

class BookController {

	/**
	 * @route POST /books
	 * @group Book - Operations about book
	 * @summary Create book
	 * @param {CreateBook.model} book.body.required
	 * @returns {object} 200 - Success
	 * @returns {Error}  default - Unexpected error
	 */
	static async create(req, res) {
		try {
			const validationResult = BookValidation.create(req.body, req.query.language);
			if (!validationResult.type) {
				return res.json(ResponseHelper.response(ResponseTypes.ERROR, validationResult.message));
			}
			const result = await BookSevice.create(req, res);
			if (!result.type) {
				return res.json(ResponseHelper.response(ResponseTypes.ERROR, result.message));
			}
			return res.json(ResponseHelper.response(ResponseTypes.SUCCESS, result.message));
		}
		catch (error) {
			return res.json(ResponseHelper.response(ResponseTypes.ERROR, error.message));
		}
	}

	/**
	 * @route GET /books/all
	 * @group Book - Operations about book
	 * @summary Get all books
	 * @returns {object} 200 - Success
	 * @returns {Error}  default - Unexpected error
	 */
	static async getAll(req, res) {
		try {
			const result = await BookSevice.getAll(req, res);
			if (!result.type) {
				return res.json(ResponseHelper.response(ResponseTypes.ERROR, result.message));
			}
			return res.json(ResponseHelper.response(ResponseTypes.SUCCESS, result.message, result.data));
		}
		catch (error) {
			return res.json(ResponseHelper.response(ResponseTypes.ERROR, error.message));
		}
	}

	/**
	 * @route GET /books/{id}
	 * @group Book - Operations about book
	 * @summary Get book by id
	 * @param {integer} id.path.required
	 * @returns {object} 200 - Success
	 * @returns {Error}  default - Unexpected error
	 */
	static async get(req, res) {
		try {
			const validationResult = BookValidation.get(req.params, req.query.language);
			if (!validationResult.type) {
				return res.json(ResponseHelper.response(ResponseTypes.ERROR, validationResult.message));
			}
			const result = await BookSevice.get(req, res);
			if (!result.type) {
				return res.json(ResponseHelper.response(ResponseTypes.ERROR, result.message));
			}
			return res.json(ResponseHelper.response(ResponseTypes.SUCCESS, result.message, result.data));
		}
		catch (error) {
			return res.json(ResponseHelper.response(ResponseTypes.ERROR, error.message));
		}
	}

}

export default BookController;
