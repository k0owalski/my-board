const User = require('../models/user');

const verifyToken = require('../utils/verifyToken');

const getUserData = async (req, res) => {
	const { authId } = req;

	const user = await User.findById(
		authId,
		'email username firstname lastname profileImage'
	);

	if (!user)
		return res.status(200).json({
			success: false,
			user: null,
			error: { message: 'Authentication failed. There is no such user.' },
		});

	return res.status(200).json({ success: true, user, error: null });
};

module.exports = {
	getUserData,
};
