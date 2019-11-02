<?php
    $q = intval($_GET['q']);

    $db_connection = pg_connect("host=localhost dbname=schedulerdb user=scheduler_user password=sc_password");
    if (!$db_connection) {
        echo "<p>An error occurred.</p>";
        exit;
    } else {
        echo "<p>Success!</p>";
    }


        $result = pg_query($db_connection, "SELECT * FROM subjects");

        echo "<table id='tableSubjects'>";

        while ($row = pg_fetch_row($result)) {
            echo "<tr id='rowSubjects'>";
            echo "<td id='subjectId'>$row[0]</td><td id='subjectName'>$row[1]</td><td id='subjectAcro'>$row[2]</td>";
            echo "</tr>";
        }
        echo "</table>";



?>
