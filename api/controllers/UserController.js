/**
 * @typedef CreateUser
 * @property {string} name
 * @property {string} surname
 * @property {string} email
 * @property {string} username
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
			const validationResult = UserValidation.create(req.body, req.query.lang);
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
			const validationResult = UserValidation.get(req.params, req.query.lang);
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

}

export default UserController;
