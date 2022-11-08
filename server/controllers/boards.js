const User = require('../models/user');
const Board = require('../models/board');

const getAccessToken = require('../utils/getAccessToken');
const verifyToken = require('../utils/verifyToken');

// get all boards for given user
const getBoards = async (req, res) => {
	const token = getAccessToken(req.headers.authorization);

	if (token) {
		const userId = verifyToken(token, process.env.ACCESS_TOKEN_SECRET);

		if (!userId) {
			res.status(400).send();
			return;
		}

		try {
			const boards = await Board.find({ 'users.id': userId });

			if (boards?.length)
				res.status(200).json({
					boards: boards.map((board) => ({ id: board.id, name: board.name })),
				});
			else res.status(400).send();
		} catch (err) {
			res.status(400).json(err);
		}
	} else res.status(400).send();
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
