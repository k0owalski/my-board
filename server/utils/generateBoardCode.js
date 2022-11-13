const generateBoardCode = () => {
	const chars =
		'1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';

	let result = '';

	for (let i = 0; i < 8; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	return result;
};

module.exports = generateBoardCode;
