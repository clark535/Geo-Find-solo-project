var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');


router.get('/', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM countries ORDER BY id;', function (errorMakingDatabaseQuery, result) {
                done();
                if (errorMakingDatabaseQuery) {
                    console.log('error', errorMakingDatabaseQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});

router.delete('/', function(req, res){
    var deleteCountry = req.query;
    pool.connect(function(errorConnectingToDatabase, client, done){
        if (errorConnectingToDatabase) {
            console.log('error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`DELETE FROM countries WHERE id=$1;`, [deleteCountry.id], function(errorMakingQuery, result){
                done();
                if (errorMakingQuery) {
                    console.log('error making query', errorMakingQuery);
                    res.send(500);
                } else {
                    res.sendStatus(200);
                }
            });
        }
    });
  });//end database delete 

module.exports = router;