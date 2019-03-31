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

 // retrieve scores. Currently this selects all from the table, configure it to select only the scores and the wins-losses

app.get('/db/scores/', function(req, res) {
    pool.query('SELECT * FROM public."Pingpong"').then(function(result) {
    console.log(result.rows)
    res.send(result.rows);
}).catch(function(err){
        console.log(err);
    });
});
//Have the post also compare the scores, and return a W into status column each time the myScore value is higher than the opponentScore.
app.post('/db/scores/', function(req, res) {
    var newScore = req.body;
    var sql = 'INSERT INTO public."Pingpong"("myScore", "opponentScore") VALUES ($1::int, $2::int)';
    console.log(newScore)
    var values = [newScore.myScore, newScore.opponentScore];
    pool.query(sql, values).then(function(result) {
        console.log(result.rows)
        res.status(201);
        res.send(result.rows);
    });
});

 // DELETE /api/items/{ID} - delete an item from the database. The item is
 // selected via the {ID} part of the URL.
 // TODO Handle this URL with appropriate Database interaction.


 var port = process.env.PORT || 5000;
 app.listen(port, function () {
     console.log('JSON Server is running on ' + port);
 });
