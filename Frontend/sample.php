<?php
    $db_connection = pg_connect("host=localhost dbname=schedulerdb user=scheduler_user password=sc_password");
    if (!$db_connection) {
        echo "An error occurred.\n";
        exit;
    } else {
        echo "Success!";
    }

    $result = pg_query($db_connection, "SELECT * FROM subjects");

    while ($row = pg_fetch_row($result)) {
        echo "$row[0] - $row[1] - $row[2]";
        echo "\n";
    }
?>
