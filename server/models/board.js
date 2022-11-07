const mongoose = require('mongoose');

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

// boardSchema.statics.methodName

module.exports = mongoose.model('Board', boardSchema);
