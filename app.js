const express = require('express');
const app = express();
const dbManager = require('DBManager')


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {


	let db = new dbManager();
	let users = db.getUsers();

	console.log(users);


})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})