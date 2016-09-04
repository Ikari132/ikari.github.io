var express = require('express');
var path = require('path');
var fs = require('fs');
var webPush = require('web-push');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(express.static(__dirname + '/'));

process.env['GCM_API_KEY'] = 'AIzaSyAWINY41ZZNyeFI7pgIuEvh5Gdq-q8hQWY';//set API key as env. variable
webPush.setGCMAPIKey(process.env.GCM_API_KEY);

app.post('/sendNotification', function(req, res) {
    setTimeout(function() {
      webPush.sendNotification(req.body.endpoint, {
        TTL: req.body.ttl,
        payload: req.body.payload,
        userPublicKey: req.body.key,
        userAuth: req.body.authSecret,
      })
      .then(function() {
        res.sendStatus(201);
      });
    }, req.body.delay * 1000);
  });

   app.post('/register', function(req, res) {
    // A real world application would store the subscription info.
    res.sendStatus(201);
  });