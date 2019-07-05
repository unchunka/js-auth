const express = require('express');
const app = express();
const dbManager = require('./DBManager.js')


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.json())

app.get('/users/:id?', async function (req, res) {

	res.send('PARAM' + req.params.id);

	let db = new dbManager();

	let users = await db.getUsers();

	res.send(users);

});

app.post('/users/', async function (req, res) {

	const bcrypt = require('bcrypt');

	bcrypt.hash('myPassword', 10, function(err, hash) {
	  // Store hash in database
	});
	
	res.send('PARAM' + req.body.login);

});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})