const User = require('../models/user');
const Board = require('../models/board');

const getBoards = async (req, res) => {
	const { authId } = req;

	const boards = await Board.find(
		{ 'users.id': authId },
		'name code tasks notes'
	);

	if (!boards?.length)
		return res.status(200).json({
			success: false,
			error: { message: 'No boards assigned to your account.' },
		});

	return res.status(200).json({
		success: true,
		boards,
	});
};

const createBoard = async (req, res) => {
	const {
		authId,
		body: { name },
	} = req;

	if (!name)
		return res.status(200).json({
			success: false,
			error: { message: 'Invalid name of the board.' },
		});

	const code = await Board.generateCode();

	const board = await Board.create({
		name,
		code,
		users: [{ id: authId, roles: ['Admin'] }],
	});

	if (!board)
		return res.status(200).json({
			success: false,
			error: { message: "Couldn't create the board." },
		});

	return res.status(200).json({
		success: true,
	});
};

const joinBoard = async (req, res) => {
	const {
		authId,
		body: { code },
	} = req;

	if (!code)
		return res.status(200).json({
			success: false,
			error: { message: 'No board code given.' },
		});

	const board = await Board.findOneAndUpdate(
		{ code },
		{ $push: { users: { id: authId, role: [] } } }
	);

	if (!board)
		return res.status(200).json({
			success: false,
			error: { message: 'The board code is invalid.' },
		});

	return res.status(200).json({
		success: true,
	});
};

const deleteBoard = async (req, res) => {
	const { board } = req.body;

	if (!board)
		return res.status(200).json({
			success: false,
			error: { message: 'No board id given.' },
		});

	try {
		await Board.findByIdAndDelete(board);

		return res.status(200).json({
			success: true,
		});
	} catch {
		return res.status(200).json({
			success: false,
			error: { message: 'Cannot remove the board.' },
		});
	}
};

module.exports = { getBoards, createBoard, joinBoard, deleteBoard };
