const User = require('../models/user');
const Board = require('../models/board');

const getAccessToken = require('../utils/getAccessToken');
const verifyToken = require('../utils/verifyToken');

const getBoards = async (req, res) => {
	const token = getAccessToken(req.headers.authorization);

	if (!token)
		return res
			.status(401)
			.json({ success: false, error: { message: 'No access token given.' } });

	const {
		data: { _id },
	} = verifyToken(token, process.env.ACCESS_TOKEN_SECRET);

	if (!_id)
		return res.status(401).json({
			success: false,
			error: { message: 'Access token is invalid or it has expired.' },
		});

	const boards = await Board.find({ 'users.id': _id }, 'name code tasks notes');

	if (!boards?.length)
		return res.status(400).json({
			success: false,
			error: { message: 'No boards assigned to your account.' },
		});

	return res.status(200).json({
		success: true,
		boards,
	});
};

const createBoard = async (req, res) => {
	const token = getAccessToken(req.headers.authorization);

	if (!token)
		return res
			.status(401)
			.json({ success: false, error: { message: 'No access token given.' } });

	const {
		data: { _id },
	} = verifyToken(token, process.env.ACCESS_TOKEN_SECRET);

	if (!_id)
		return res.status(401).json({
			success: false,
			error: { message: 'Access token is invalid or it has expired.' },
		});

	const { name } = req.body;

	if (!name)
		return res.status(400).json({
			success: false,
			error: { message: 'Invalid name of the board.' },
		});

	const code = await Board.generateCode();

	const board = await Board.create({
		name,
		code,
		users: [{ id: _id, roles: ['Admin'] }],
		tasks: [],
		notes: [],
	});

	if (!board)
		return res.status(400).json({
			success: false,
			error: { message: "Couldn't create the board." },
		});

	return res.status(200).json({
		success: true,
	});
};

const joinBoard = async (req, res) => {
	const token = getAccessToken(req.headers.authorization);

	if (!token)
		return res
			.status(401)
			.json({ success: false, error: { message: 'No access token given.' } });

	const {
		data: { _id },
	} = verifyToken(token, process.env.ACCESS_TOKEN_SECRET);

	if (!_id)
		return res.status(401).json({
			success: false,
			error: { message: 'Access token is invalid or it has expired.' },
		});

	const { code } = req.body;

	if (!code)
		return res.status(400).json({
			success: false,
			error: { message: 'No board code given.' },
		});

	const board = await Board.findOneAndUpdate(
		{ code },
		{ $push: { users: { id: _id, role: [] } } }
	);

	if (!board)
		return res.status(400).json({
			success: false,
			error: { message: 'The board code is invalid.' },
		});

	return res.status(200).json({
		success: true,
	});
};

const deleteBoard = async (req, res) => {
	const token = getAccessToken(req.headers.authorization);

	if (!token)
		return res
			.status(401)
			.json({ success: false, error: { message: 'No access token given.' } });

	const {
		data: { _id },
	} = verifyToken(token, process.env.ACCESS_TOKEN_SECRET);

	if (!_id)
		return res.status(401).json({
			success: false,
			error: { message: 'Access token is invalid or it has expired.' },
		});

	const { board } = req.body;

	if (!board)
		return res.status(400).json({
			success: false,
			error: { message: 'No board id given.' },
		});

	try {
		await Board.findByIdAndDelete(board);

		return res.status(200).json({
			success: true,
		});
	} catch {
		return res.status(400).json({
			success: false,
			error: { message: 'Cannot remove the board.' },
		});
	}
};

module.exports = { getBoards, createBoard, joinBoard, deleteBoard };
