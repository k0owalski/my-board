const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
	console.log(req.body);

	res.json({ success: true, authenticated: true });
});

router.post('/sign-in', (req, res) => {
	console.log(req.body);

	res.json({
		success: true,
		token: '89fh12h3981h39f21.f98j213jf1jj3f013.f9jh21hj9h91hsgbhs03h10fh',
		refresh: 'bhhdjhsh19h9823h91h.nd1j8u98h289ebgfhj1203.hdah9eh2981h983',
	});
});

router.post('/sign-up', (req, res) => {
	console.log(req.body);

	res.json({ success: true });
});

router.post('/refresh', (req, res) => {
	console.log(req.body);

	res.json({
		success: true,
		token: 'f98j213jf1jj3ahsd9.1u92j3h92h13fh180h3f.jamdj8dha0hh12312h3g',
		refresh: 'nv12yni3ho12h490.an7dvnayy2y1g31gjkgfh3y5.ay9vsyb8a7tf4y132',
	});
});

module.exports = router;
