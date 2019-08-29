const pool = require('../../databasePool');

class UserTable {
	static viewSubjects() {
		return new Promise((resolve, reject) => {
			pool.query(`SELECT * FROM SUBJECTS`, (err, res) => {
				if (err) return reject(err);
				resolve(res.rows);
			});
		});
	}
}

module.exports = UserTable;
