const User = require('../models/user');
const Board = require('../models/board');

const getAccessToken = require('../utils/getAccessToken');
const verifyToken = require('../utils/verifyToken');

// get all boards for given user
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

// create a new board
const createBoard = async (req, res) => {
	const token = getAccessToken(req.headers.authorization);

	if (token) {
		const { name, code } = req.body;

		const userId = verifyToken(token, process.env.ACCESS_TOKEN_SECRET);

		if (!name || !code || !userId) {
			res.status(400).send();
			return;
		}

		try {
			await Board.create({
				name,
				code,
				users: [{ id: userId, roles: ['Admin'] }],
				tasks: [],
				notes: [],
			});

			res.status(200).send();
		} catch {
			res.status(400).send();
		}
	} else res.status(400).send();
};

// join a board
const joinBoard = async (req, res) => {
	const token = getAccessToken(req.headers.authorization);

	if (token) {
		const { code } = req.body;

		const userId = verifyToken(
			getAccessToken(req.headers.authorization),
			process.env.ACCESS_TOKEN_SECRET
		);

		if (!code || !userId) {
			res.status(400).send();
			return;
		}

		try {
			const board = await Board.findOneAndUpdate(
				{ code },
				{ $push: { users: { id: userId, role: [] } } }
			);

			if (!board) {
				res.status(400).send();
				return;
			}

			res.status(200).send();
		} catch {
			res.status(400).send();
		}
	} else res.status(400).send();
};

module.exports = { getBoards, createBoard, joinBoard };
