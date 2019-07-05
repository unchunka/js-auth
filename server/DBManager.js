module.exports = class DBManager {

	constructor() {

 		var mysql = require('mysql');

		this.con = mysql.createConnection({
		  host: "localhost",
		  user: "root",
		  password: "",
		  database: "authjs"
		});

		this.con.connect(function(err) {
			if (err) throw err;
			console.log("Connected!");
		});

	}

	_makeQuery(sql) {

		var self = this;

		return new Promise( function(resolve,reject) {

			self.con.query(sql, function(err, res) {
				if (err) {
					reject();
				}
				resolve(res);
			});

		});

	}

	async getUserById(id) {

		return await this._makeQuery("SELECT * FROM user WHERE id = " + id);

	}

	async getUsers() {

		return await this._makeQuery("SELECT * FROM user");

	}

	async registerUser(login, password) {

		return await this._makeQuery("INSERT INTO user (login, password) VALUES ('" + login + "', '" + password + "')");

	}

	async getUserByEmail(email) {

		let result = await this._makeQuery("SELECT * FROM user WHERE email = '" + email + "'");

		return result[0];

	}


}
