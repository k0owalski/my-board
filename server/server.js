const express = require('express');
const cors = require('cors'); // needed if using localhost
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const authRoutes = require('./routes/auth');

// middlewares
app.use(cors()); // needed if using localhost
app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method, req.body);
	next();
});

// routing
app.use('/api/auth', authRoutes);

// db connect
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		app.listen(process.env.PORT, () =>
			console.log('DB connected. Listening on port 3072...')
		);
	})
	.catch((error) => console.log("DB hasn't connected ==> ", error.message));
