const { Router } = require('express');
const router = new Router();
const userTable = require('../tables/userTable');

router.get('/viewSubjects', (req, res, next) => {
	userTable.viewSubjects().then((data) => res.json(data)).catch((err) => next(err));
});

module.exports = router;
