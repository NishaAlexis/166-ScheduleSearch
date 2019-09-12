const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRouter = require('./api/user');

const app = express();
//app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.use('/user', userRouter);

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;

	res.status(statusCode).json({
		type: 'error',
		message: err.message
	});
});

module.exports = app;
