//require('rootpath')();

var express = require('express');
var config = require("./config.json");


var api = express();
api.use(express.urlencoded());
api.use(express.json());

api.use('/api/produtorio', require('./controllers/api/produtorio.controller.js'));

var apiPort = config.port;

var serverAPI = api.listen(apiPort, function () {
    console.log('Server API listening at http://' + serverAPI.address().address + ':' + serverAPI.address().port);
});
