const pool = require('../../databasePool');

class UserTable {
	static viewSubjects() {
		return new Promise((resolve, reject) => {
			pool.query(
				`SELECT "courseType", "acro", "subjectNum", "subjectDesc"
				FROM subjectnum
				inner join subjects
				on subjectnum."subjectId" = subjects.id
				inner join coursetype
				on subjectnum."courseTypeId" = coursetype.id`,
				(err, res) => {
					if (err) return reject(err);
					resolve(res.rows);
				}
			);
		});
	}
}

module.exports = UserTable;
