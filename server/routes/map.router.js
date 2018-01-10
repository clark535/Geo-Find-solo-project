var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');


router.get('/', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM countries ORDER BY order_id;', function (errorMakingDatabaseQuery, result) {
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
            console.log('delete id =', deleteCountry);
            client.query(`DELETE FROM countries WHERE id=$1;`, [deleteCountry.countries], function(errorMakingQuery, result){
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
  
  router.put('/', function(req, res){
    pool.connect(function(errorConnectingToDatabase, client, done){
        if (errorConnectingToDatabase) {
            console.log('error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            for (let i = 0; i < req.body.length; i++) {
                client.query(`UPDATE countries SET order_id = $1 WHERE id = $2;`, [req.body[i].order_id, req.body[i].id], function(errorMakingQuery, result){
                    done();
                if (errorMakingQuery) {
                        console.log('error making query', errorMakingQuery);
                        res.send(500);
                    } else {
                        //res.sendStatus(200);
                    }
                });
            }
        }
    });
  });//end database update/changing compelete-incomplete status

module.exports = router;