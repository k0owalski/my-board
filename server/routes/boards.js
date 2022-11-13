const express = require('express');

const {
	getBoards,
	createBoard,
	joinBoard,
	deleteBoard,
} = require('../controllers/boards');

const router = express.Router();

router.get('/', getBoards);

router.post('/create', createBoard);

router.post('/join', joinBoard);

router.post('/delete', deleteBoard);

module.exports = router;
