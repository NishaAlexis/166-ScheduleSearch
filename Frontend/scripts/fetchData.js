var url = 'localhost:4000/user/viewSubjects';

fetch(url, {
	headers: {
		'Content-Type': 'application/json',
		host: 'localhost:4000'
	}
}).then((data) => console.log(data));
