import Joi from 'joi';

import ValidationHelper from '../helpers/ValidationHelper';

class UserValidation {

	static create(data, lang) {
		const schema = Joi.object({
			name: Joi.string(),
		});

		const {error} = schema.validate(data);
		if (error) {
			return {type: false, message: ValidationHelper.joiEditMessage(error.details[0], lang)};
		}
		return {type: true};
	}

	static get(data, lang) {
		const schema = Joi.object({
			id: Joi.number().required(),
		});

		const {error} = schema.validate(data);
		if (error) {
			return {type: false, message: ValidationHelper.joiEditMessage(error.details[0], lang)};
		}
		return {type: true};
	}

}

export default UserValidation;
