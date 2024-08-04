/**
 * @typedef CreateUser
 * @property {string} name.required
 */

/**
 * @typedef ReturnBook
 * @property {double} score
 */

import UserSevice from '../services/UserService';
import UserValidation from '../validations/UserValidation';
import ResponseHelper from '../helpers/ResponseHelper';
import ResponseTypes from '../enums/ResponseTypes';

class UserController {

	/**
	 * @route POST /users
	 * @group User - Operations about user
	 * @summary Create user
	 * @param {CreateUser.model} user.body.required
	 * @returns {object} 200 - Success
	 * @returns {Error}  default - Unexpected error
	 */
	static async create(req, res) {
		try {
			const validationResult = UserValidation.create(req.body, req.headers.language);
			if (!validationResult.type) {
				return res.json(ResponseHelper.response(ResponseTypes.ERROR, validationResult.message));
			}
			const result = await UserSevice.create(req, res);
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
	 * @route GET /users/all
	 * @group User - Operations about user
	 * @summary Get all users
	 * @returns {object} 200 - Success
	 * @returns {Error}  default - Unexpected error
	 */
	static async getAll(req, res) {
		try {
			const result = await UserSevice.getAll(req, res);
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
	 * @route GET /users/{id}
	 * @group User - Operations about user
	 * @summary Get user by id
	 * @param {integer} id.path.required
	 * @returns {object} 200 - Success
	 * @returns {Error}  default - Unexpected error
	 */
	static async get(req, res) {
		try {
			const validationResult = UserValidation.get(req.params, req.headers.language);
			if (!validationResult.type) {
				return res.json(ResponseHelper.response(ResponseTypes.ERROR, validationResult.message));
			}
			const result = await UserSevice.get(req, res);
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
	 * @route POST /users/{user_id}/borrow/{book_id}
	 * @group User - Operations about user
	 * @summary Borrow book
	 * @param {integer} user_id.path.required
	 * @param {integer} book_id.path.required
	 * @returns {object} 200 - Success
	 * @returns {Error}  default - Unexpected error
	 */
	static async borrowBook(req, res) {
		try {
			const validationResult = UserValidation.borrowBook(req.params, req.headers.language);
			if (!validationResult.type) {
				return res.json(ResponseHelper.response(ResponseTypes.ERROR, validationResult.message));
			}
			const result = await UserSevice.borrowBook(req, res);
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
	 * @route POST /users/{user_id}/return/{book_id}
	 * @group User - Operations about user
	 * @summary Return book
	 * @param {integer} user_id.path.required
	 * @param {integer} book_id.path.required
	 * @param {ReturnBook.model} book.body.required
	 * @returns {object} 200 - Success
	 * @returns {Error}  default - Unexpected error
	 */
	static async returnBook(req, res) {
		try {
			const validationResult = UserValidation.returnBook({...req.params, ...req.body}, req.headers.language);
			if (!validationResult.type) {
				return res.json(ResponseHelper.response(ResponseTypes.ERROR, validationResult.message));
			}
			const result = await UserSevice.returnBook(req, res);
			if (!result.type) {
				return res.json(ResponseHelper.response(ResponseTypes.ERROR, result.message));
			}
			return res.json(ResponseHelper.response(ResponseTypes.SUCCESS, result.message));
		}
		catch (error) {
			return res.json(ResponseHelper.response(ResponseTypes.ERROR, error.message));
		}
	}

}

export default UserController;
