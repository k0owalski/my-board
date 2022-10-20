require('dotenv').config();

const express = require('express');
const app = express();

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

app.get('/api/users/:id', (req, res) => {
	const user = {
		username: 'Konrad Kowalik',
		boards: ['A82AJ39J', 'J16K423S'],
		settings: {
			theme: 'light',
		},
	};

	res.json(user);
});

app.listen(process.env.PORT);
