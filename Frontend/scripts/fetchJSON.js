var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		const list = JSON.parse(this.responseText);

		// var parameters = location.search.substring(1).split('&');
		// console.log(parameters);
		// var temp = parameters[0].split('=');
		// l = unescape(temp[1]);
		// temp = parameters[1].split('=');
		// p = unescape(temp[1]);

		var cols = Headers(list, '#table'); //var cols = Headers(list, '#table');
		//console.log(cols);
		var newList = getRandomSchedules(list, 2, 1);
		for (var i = 0; i < newList.length; i++) {
			var row = $('<tr/>');

			var val = newList[i][9];

			if (val == null) val = '';
			row.append($('</td>').html(val));

			for (var colIndex = 0; colIndex < cols.length; colIndex++) {
				var val = '<input type="checkbox">' + newList[i][cols[colIndex]];

				// If there is any key, which is matching
				// with the column name
				if (val == null) val = '';
				console.log(val);
				row.append($('<td/>').html(val));
			}

			// Adding each row to the table
			$('#table').append(row);
		}

		//ToDo
		//Generate random schedules given year level and semester

		function processUser() {
			console.log(l);
			document.getElementById('log').innerHTML = l;
			document.getElementById('pass').innerHTML = p;
		}

		function Headers(list, selector) {
			var columns = [];
			var schedules = [];
			var header = $('<tr/>');

			for (var i = 0; i < list.length; i++) {
				var row = list[i];

				// for (var k in row) {
				if ($.inArray('abbr', columns) == -1) {
					// k (header) is in columns (header array)
					columns.push('abbr');
					// Creating the header
					header.append($('<th/>').html('First Year, First Semester'));
				}
				// }
				schedules.push(row);
			}

			//Appending the header to the table
			$(selector).append(header);
			return columns;
		}

		function getRandomSchedules(schedules, yearLevel, semester) {
			var randomSchedules = [];

			var tempSchedules = [];
			for (var i = 0; i < schedules.length; i++) {
				// console.log(schedules[i]);
				//if (schedules[i].yearLvl == 1 && schedules[i].semester == 1) {
					tempSchedules.push(schedules[i]);
				
			}
			return tempSchedules
		}
	}
};
xmlhttp.open('GET', 'subjectnum.json', true);
xmlhttp.send();
