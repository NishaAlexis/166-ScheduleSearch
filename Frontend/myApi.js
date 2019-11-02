var myapi = {
	get: function(callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'php/sample.php', true);

		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					callback(null, JSON.parse(xhr.responseText));
				} else {
					callback(xhr.status);
				}
			}
		};

		xhr.send();
	}
};
