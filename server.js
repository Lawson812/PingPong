 const express = require('express');
 const bodyParser = require('body-parser');
 const pg = require('pg');

 const app = express();
 app.use(express.static('public'));
 app.use(bodyParser.json());

 // TODO Set up access to the database via a connection pool.
 const pool = new pg.Pool({
     user: "postgres",
     password: "Lawson33",
     host: "localhost",
     port: 4554,
     database: "postgres",
     ssl: false
 });

 // GET /api/items - responds with an array of all items in the database.
 // TODO Handle this URL with appropriate Database interaction.


 // POST /api/items - adds and item to the database. The items name and price
 // are available as JSON from the request body.
 // TODO Handle this URL with appropriate Database interaction.


 // DELETE /api/items/{ID} - delete an item from the database. The item is
 // selected via the {ID} part of the URL.
 // TODO Handle this URL with appropriate Database interaction.


 var port = process.env.PORT || 5000;
 app.listen(port, function () {
     console.log('JSON Server is running on ' + port);
 });
