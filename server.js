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

//Retrieve scores by name input
app.get('/db/scores/:name', function(req, res) {
    var  name = req.params.name;
    console.log(name)
    pool.query('SELECT * FROM public."Scores" WHERE "Name" = $1::text',[name]).then(function(result) {
        if (result.rowCount === 0) {
            res.status(404); 
            res.send("NOT FOUND");
        } else {
            res.send(result.rows);
        }
    });
    
});
//Have the post also compare the scores, and return a W into status column each time the myScore value is higher than the opponentScore.
app.post('/db/scores/', function(req, res) {
    var newScore = req.body;
    var sql = 'INSERT INTO public."Scores"("myScore", "opponentScore","Name") VALUES ($1::int, $2::int, $3::text)';
    var values = [newScore.myScore, newScore.opponentScore, newScore.name];
    pool.query(sql, values).then(function(result) {
        console.log(result.rows)
        res.status(201);
        res.send(result.rows);
    });
});

    //TODO create a request that gets all data from the table

 var port = process.env.PORT || 5000;
 app.listen(port, function () {
     console.log('JSON Server is running on ' + port);
 });
