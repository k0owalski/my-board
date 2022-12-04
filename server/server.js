const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors'); // needed if using localhost

require('dotenv').config();

const app = express();

const authMW = require('./utils/auth');

const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const boardsRoutes = require('./routes/boards');

// middlewares
app.use(cors({ credentials: true, origin: 'http://localhost:3000' })); // needed if using localhost
app.use(express.json());

app.use(authMW);

// routing
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/boards', boardsRoutes);

// db connect
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		app.listen(process.env.PORT, () =>
			console.log('DB connected. Listening on port 3072...')
		);
	})
	.catch((error) => console.log("DB hasn't connected ==> ", error.message));
