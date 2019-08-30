# 166-ScheduleSearch

Instructions to run the backend
1. Install PosgreSQL
2. Run CMD and Enter "createdb -U postgres schedulerdb"
3. If no errors are found, Enter "psql -U postgres schedulerdb"
4. When you have successfully entered psql, Enter
    \t "create user scheduler_user with superuser password 'sc_password';"
5. To exit psql, hit CTRL+C in windows
6. Navigate to the root directory of this project/backend and run git bash
7. Enter command in the git bash "./bin/configuration_db.sh"

If error "module not found" is encountered,
1. Run CMD in the same directory "project/backend"
2. Enter "npm install -module_not-found" to add it in your computer

Change the -module_not_found- with the module that is needed
Example: npm install nodemon
