require('dotenv').config();

var axios = require('axios');
var moment = require('moment');
var Spotify = require('node-spotify-api');
var command = [];
console.log(moment());
console.log(process.argv);
