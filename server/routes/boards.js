const express = require('express');

const { getBoards, createBoard, joinBoard } = require('../controllers/boards');

const router = express.Router();

router.get('/', getBoards);

router.post('/create', createBoard);

router.post('/join', joinBoard);

module.exports = router;
