require('dotenv').config();

var keys = require('./keys');
var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');

//var fs = require("fs");

console.log(moment());
console.log(process.argv);
// Take two arguments.
var command = process.argv[2];
var input = process.argv[3];
console.log(command);
console.log(input);

// The switch-case will direct which function gets run.
switch (command) {
  case "concert-this":
    concertThis(input);
    break;

  case "spotify-this-song":
    spotifyThis(input);
    break;

  case "movie-this":
    movieThis(input);
    break;

  case "do-what-it-says":
    doThat();
    break;
}

/*`node liri.js concert-this <artist/band name here>`*/

function concertThis(artistName) {

  if (artistName === undefined) {
    console.log("x");
  };

  var queryUrl = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";
  //console.log(queryUrl);

  axios.get(queryUrl).then(
    function (response) {

      var venue = response.data
      //console.log(venue);

      for (var i = 0; i < venue.length; i++) {

        var date = moment(venue[i].datetime)
        console.log(i);
        console.log("Venue : " + venue[i].venue.name);
        console.log("Venue Location : " + venue[i].venue.city + "," + venue[i].venue.country);
        console.log("Date of the Event : " + date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
        console.log("======================================================");
      }
    }
  );
};

/*node liri.js spotify-this-song '<song name here>'`
    This will show the following information about the song in your terminal/bash window
      Artist(s)
      The song's name
      A preview link of the song from Spotify
      The album that the song is from
    If no song is provided then your program will default to "The Sign" by Ace of Base.*/


var spotify = new Spotify(keys.spotify);
//var spotify = new Spotify(keys.spotify);
//console.log("spotify",spotify);
//console.log(keys.spotify);

function spotifyThis(songName) {
  if (songName === undefined) {
    songName = "The Sign"; //default Song
  }

  spotify.search({ type: 'track', query: songName }, function (err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    }

    var songs = data.tracks.items;
    console.log(songs)
    for (var i = 0; i < songs.length; i++) {
      console.log(i);
      //console.log("Artist:" + songs[i].artist);
      console.log("Song's name:" + songs[i].name);
      console.log("Song's preview:" + songs[i].preview_url);
      console.log("Album:" + songs[i].album.name);
      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    }
  });
}

/*`node liri.js movie-this '<movie name here>'` */

function movieThis(movieName) {

  if (movieName === undefined) {
    movieName = "Mr. Nobody"; //default Movie
    console.log(" If you haven't watched 'Mr. Nobody', then you should: <http://www.imdb.com/title/tt0485947/> It's on Netflix!");
  };

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  //console.log(queryUrl);

  axios.get(queryUrl).then(
    function (response) {
      // console.log(response);
      console.log("======================================================")
      console.log("Title of the movie: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log(response.data.Ratings[1].Source + " Rating: " + response.data.Ratings[1].input);
      console.log("Origin Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log("======================================================");

    }
  );
}

/* `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     * Edit the text in random.txt to test out the feature for movie-this and concert-this.*/




