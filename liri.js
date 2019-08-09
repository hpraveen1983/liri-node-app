require("dotenv").config();

var Spotify = require("node-spotify-api");

var keys = require("./keys");

var request = require("request");

var fs = require("fs");

var spotify = new Spotify(keys.spotify);