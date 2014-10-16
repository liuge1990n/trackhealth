var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var Schema = mongoose.Schema;
//Http and Https
var fs = require('fs');
var http = require('http');
//var https = require('https');

//Modules
var profile = require('./controller/profile');

//Database
mongoose.connect = ('mongodb://trackhealth:trackhealth@ds041160.mongolab.com:41160/trackhealth');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

//Model
var healthDatas = new Schema({
    userid: String,
    wg: [{ date:Date, weight:Number}]
});
mongoose.model("healthDatas",healthDatas);
var healthData=mongoose.model("healthDatas");
//API

app.get('/api/users/:userid/weight',profile.getweight);
app.post('/api/users/:userid/weight',profile.updateweight);
//Setting up link
var httpServer = http.createServer(app);
httpServer.listen(3000);
console.log("Now listening http on 3000");