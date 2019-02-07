const bcrypt = require('bcryptjs');
const signup = async (req, res) => {
	const { username, password } = req.body;
	const db = req.app.get('db');
	const hash = await bcrypt.hash(password, 12);
	try {
		const response = await db.add_user([username, hash]);
		req.session.user = { username: response[0].username };
		res.status(200).json(response[0].username);
	} catch (err) {
		console.log(err);
		res.status(401).json('An error occurred');
	}
};
const login = async (req, res) => {
	const { username, password } = req.body;
	const db = req.app.get('db');
	db
		.find_user(username)
		.then(async response => {
			console.log(response);
			if (!response.length) {
				res.status(401).json({ error: 'No user found' });
			} else {
				const isMatch = await bcrypt.compare(
					password,
					response[0].hash
				);
				if (!isMatch) {
					res.status(401).json({ error: 'Shitty H4x0r' });
				} else {
					req.session.user = { username: response[0].username };
					res.status(200).json({ username: response[0].username });
				}
			}
		})
		.catch(err => console.log(err));
};

const get_user = (req, res) => {
	if (req.session.user) {
		res.json(req.session.user);
	} else {
		res.status(401).json({ error: 'Please log in' });
	}
};

module.exports = {
	signup,
	login,
	get_user
};
