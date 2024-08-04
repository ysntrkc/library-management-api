import Joi from 'joi';

import ValidationHelper from '../helpers/ValidationHelper';

class UserValidation {

	static create(data, language) {
		const schema = Joi.object({
			name: Joi.string(),
		});

		const {error} = schema.validate(data);
		if (error) {
			return {type: false, message: ValidationHelper.joiEditMessage(error.details[0], language)};
		}
		return {type: true};
	}

	static get(data, language) {
		const schema = Joi.object({
			id: Joi.number().required(),
		});

		const {error} = schema.validate(data);
		if (error) {
			return {type: false, message: ValidationHelper.joiEditMessage(error.details[0], language)};
		}
		return {type: true};
	}

	static borrowBook(data, language) {
		const schema = Joi.object({
			user_id: Joi.number().integer().required(),
			book_id: Joi.number().integer().required(),
		});

		const {error} = schema.validate(data);
		if (error) {
			return {type: false, message: ValidationHelper.joiEditMessage(error.details[0], language)};
		}
		return {type: true};
	}

	static returnBook(data, language) {
		const schema = Joi.object({
			user_id: Joi.number().integer().required(),
			book_id: Joi.number().integer().required(),
			score: Joi.number().min(0).max(10).optional(),
		});

		const {error} = schema.validate(data);
		if (error) {
			return {type: false, message: ValidationHelper.joiEditMessage(error.details[0], language)};
		}
		return {type: true};
	}

}

export default UserValidation;
