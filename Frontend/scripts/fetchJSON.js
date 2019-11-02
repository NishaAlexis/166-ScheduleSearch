var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		const list = JSON.parse(this.responseText);

		var cols = Headers(list, '#table');
		var newList = getRandomSchedules(list, 3, 2);
		for (var i = 0; i < newList.length; i++) {
			var row = $('<tr/>');
			for (var colIndex = 0; colIndex < cols.length; colIndex++) {
				var val = newList[i][cols[colIndex]];

				// If there is any key, which is matching
				// with the column name
				if (val == null) val = '';
				row.append($('<td/>').html(val));
			}

			// Adding each row to the table
			$('#table').append(row);
		}

		//ToDo
		//Generate random schedules given year level and semester

		function Headers(list, selector) {
			var columns = [];
			var schedules = [];
			var header = $('<tr/>');

			for (var i = 0; i < list.length; i++) {
				var row = list[i];

				for (var k in row) {
					if ($.inArray(k, columns) == -1) {
						columns.push(k);

						// Creating the header
						header.append($('<th/>').html(k));
					}
				}
				schedules.push(row);
			}

			// Appending the header to the table
			$(selector).append(header);
			return columns;
		}

		function getRandomSchedules(schedules, yearLevel, semester) {
			var randomSchedules = [];

			var tempSchedules = [];
			for (var i = 0; i < schedules.length; i++) {
				// console.log(schedules[i]);
				if (schedules[i].yearLvl === yearLevel && schedules[i].semester === semester) {
					tempSchedules.push(schedules[i]);
				}
			}
			return tempSchedules;
		}
	}
};
xmlhttp.open('GET', 'subjectnum.json', true);
xmlhttp.send();
