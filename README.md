# liri-node-app

LIRI stands for Language Interpretation and Recognition Interface. LIRI bot is a command line node app that takes in parameters and returns data.

NPM Dependencies

dotenv
node-spotify-api
request
fs

API Integration

Spotify
OMDB

Usage
The following commands run without user input:


$ node app.js spotify-this-song
$ node app.js movie-this
$ node app.js do-what-it-says

These commands accept user input:

$ node app.js spotify-this-song 'El Paso'
$ node app.js movie-this 'Snakes On A Plane'
