const express = require('express');
const app = express();
const dbManager = require('./DBManager.js')

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	//res.header("Allow", "GET,HEAD,PUT,PATCH,POST,DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.json())

app.post('/users/', async function (req, res) {

	const bcrypt = require('bcrypt');

	let db = new dbManager();

	var salt = bcrypt.genSaltSync(10);

	var hash = bcrypt.hashSync(req.body.password, salt);

	await db.registerUser(req.body.email, hash);
	
	res.send('PARAM' + req.body.email);

});

app.get('/users/:id?', async function (req, res) {

	let db = new dbManager();
console.log('IDDD',req.params.id)
	let result;

	if (req.params.id) {
		result = await db.getUserById(req.params.id);
	}
	else {
		result = await db.getUsers();
	}

	res.send(result);

});

app.post('/users/login', async function (req, res) {

	const bcrypt = require('bcrypt');

	let db = new dbManager();

	let user = await db.getUserByEmail(req.body.email);

	let passwordIsGood = bcrypt.compareSync(req.body.password, user.password);

	res.send(passwordIsGood);

});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})
