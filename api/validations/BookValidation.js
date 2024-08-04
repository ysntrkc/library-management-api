import Joi from 'joi';

import ValidationHelper from '../helpers/ValidationHelper';

class BookValidation {

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

}

export default BookValidation;
