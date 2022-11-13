const mongoose = require('mongoose');
const generateBoardCode = require('../utils/generateBoardCode');

const note = new mongoose.Schema(
	{
		title: String,
		content: String,
		createdBy: mongoose.Schema.Types.ObjectId,
		roles: [String],
	},
	{ timestamps: true }
);

const boardSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		code: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		users: [
			{
				id: {
					type: mongoose.Schema.Types.ObjectId,
					required: true,
					unique: true,
				},
				roles: [String],
			},
		],
		tasks: {
			type: [mongoose.Schema.Types.ObjectId],
			unique: true,
		},
		notes: [note],
	},
	{ timestamps: true }
);

boardSchema.statics.generateCode = async function () {
	let code = '';
	let isUnique = false;

	do {
		code = generateBoardCode();

		isUnique = await this.findOne({ code }, {});
	} while (!!isUnique === false);

	return code;
};

module.exports = mongoose.model('Board', boardSchema);
