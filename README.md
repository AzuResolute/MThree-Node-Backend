# MThree-Node-Backend

Node.js Tutorial that was taught on 02/13/2020

## How to run

* Install the following technologies:
  * **Node.js** - https://nodejs.org/en/download/
  * **MariaDb** - https://mariadb.com/downloads/
  * **Visual Studio Code** (Not Required) - https://code.visualstudio.com/Download
* Install these npm packages:
  * npm install express
  * npm install mariadb
  * npm install cors
* Launch the app!
  * On your terminal, run node app.js

## What have we learned?

* Node.js liberates JavaScript from being a simple web browser language.
* We used Express to launch a web server at localhost: 7777:
* We used the npm package of mariadb to launch these SQL queries:
  * Create a table of Consultants
  * Inserted an instance of every MThree consultant trained in the January 2020 cohort into Consultants table
  * Read the contents of the Consultants table as Json
* We combined both Express and MariaDb to expose an API that can read our Consultants table from a web app.

Please use in tandem with the frontend application to take full advantage of the full stack JavaScript application:
https://github.com/AzuResolute/MThree-React-Frontend
