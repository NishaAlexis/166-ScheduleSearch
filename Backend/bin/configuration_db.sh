#!/bin/bash

#Please change to a more secure password when trying to deploy already
#And also remove the password here so it won't get uploaded to git
#This is used for Initializing the Database
export PGPASSWORD='sc_password';

echo "Configuring Scheduler System DB"

dropdb -U scheduler_user schedulerdb
createdb -U scheduler_user schedulerdb

psql -U scheduler_user schedulerdb <./bin/sql/courseType.sql
psql -U scheduler_user schedulerdb <./bin/sql/subject.sql
psql -U scheduler_user schedulerdb <./bin/sql/subjectNum.sql
psql -U scheduler_user schedulerdb <./bin/sql/courseTypeInsert.sql
psql -U scheduler_user schedulerdb <./bin/sql/subjectInsert.sql
psql -U scheduler_user schedulerdb <./bin/sql/insert.sql
