const User = require('../models/user');
const Board = require('../models/board');

// get all boards for given user
const getBoards = async (req, res) => {
	const userId = req.body.userId;

	if (!userId) {
		res.status(400).send();
		return;
	}

	try {
		const boardIDs = await User.findById(userId).boards;
		const boards = await Board.find({ _id: { $in: boardIDs } });

		if (boards?.length)
			res
				.status(200)
				.json({
					boards: boards.map((board) => ({ id: board.id, name: board.name })),
				});
		else res.status(400).send();
	} catch {
		res.status(400).send();
	}
};

// create a new board
const createBoard = async (req, res) => {
	const { name, code, userId } = req.body;

	if (!name || !code || !userId) {
		res.status(400).send();
		return;
	}

	try {
		await Board.create({ name, code, users: [userId] });

		res.status(200).send();
	} catch {
		res.status(400).send();
	}
};

// join a board
const joinBoard = async (req, res) => {
	const { code, userId } = req.body;

	if (!code || !userId) {
		res.status(400).send();
		return;
	}

	try {
		const board = await Board.findOneAndUpdate(
			{ code },
			{ $push: { users: userId } }
		);

		if (!board) {
			res.status(400).send();
			return;
		}

		res.status(200).send();
	} catch {
		res.status(400).send();
	}
};

module.exports = { getBoards, createBoard, joinBoard };
