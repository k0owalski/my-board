const mongoose = require('mongoose');

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
		},
		users: {
			type: Array,
			required: true,
		},
	},
	{ timestamps: true }
);

// boardSchema.statics.methodName

module.exports = mongoose.model('Board', boardSchema);
