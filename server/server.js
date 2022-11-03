const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors'); // needed if using localhost
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();

const authRoutes = require('./routes/auth');
const boardsRoutes = require('./routes/boards');

// middlewares
app.use(cors({ credentials: true, origin: 'http://localhost:3000' })); // needed if using localhost
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
	console.log(req.path, req.method, req.body);
	next();
});

// routing
app.use('/api/auth', authRoutes);
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
