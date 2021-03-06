var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

// Handles Ajax request for user information if user is authenticated
router.get('/', function (req, res) {
  console.log('get /user route');
  // check if logged in
  if (req.isAuthenticated()) {
    // send back user object from database
    console.log('logged in', req.user);
    var userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
    res.send(false);
  }
});

// clear all server session information about this user
router.get('/logout', function (req, res) {
  // Use passport's built-in method to log out the user
  console.log('Logged out');
  req.logOut();
  res.sendStatus(200);
});

//to post new countries
router.post('/country', function (req, res) {
  pool.connect(function (errorConnectingToDatabase, client, done) {
    if (errorConnectingToDatabase) {
      console.log('error connecting to database', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query(`INSERT INTO countries (country, flag, image1, image2, video) 
          VALUES ($1, $2, $3, $4, $5);`, [req.body.country, req.body.flag, req.body.image1, req.body.image2, req.body.video], function (errorMakingQuery, result) {
          done();
          if (errorMakingQuery) {
            console.log('error making query', errorMakingQuery);
            res.send(500);
          } else {
            res.sendStatus(201);
          }
        });
    }
  });
});

module.exports = router;
