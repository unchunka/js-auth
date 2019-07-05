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

	async getUsers() {

		return await this._makeQuery("SELECT * FROM user");

	}

}