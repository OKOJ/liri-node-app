require('dotenv').config();

var keys = require('./keys');
var axios = require('axios');
var moment = require('moment');
var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
//console.log(moment());
//console.log(process.argv);

// Take two arguments.
var command = process.argv[2];
var input = process.argv.slice(3).join(" ");
//console.log(command);
//console.log(input);

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
  default: console.log("Type one of the command: 'concert-this','spotify-this-song','movie-this','do-what-it-says'");
}

/*`node liri.js concert-this <artist/band name here>`*/

function concertThis(artistName) {
  if (!artistName) {
    console.log("You must enter Artist or Band name.");
  } else {
    var queryUrl = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";
    //console.log(queryUrl);

    axios.get(queryUrl).then(
      function (response) {

        /*if (!venue) {
          console.log("Your artist not on tour.")
        }*/

        var venue = response.data
        //console.log(venue);

        for (var i = 0; i < venue.length; i++) {
          var date = moment(venue[i].datetime)

          console.log("====================Event Info==================================");
          console.log(i);
          console.log("Venue : " + venue[i].venue.name);
          console.log("Venue Location : " + venue[i].venue.city + "," + venue[i].venue.country);
          console.log("Date of the Event : " + date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
          console.log("----------------------------------------------------------------");
        }

      }
    );
  }
};

/*node liri.js spotify-this-song '<song name here>'`*/

function spotifyThis(songName) {
  if (!songName) {
    songName = "The Sign"; //default Song
  }

  spotify.search({ type: "track", query: songName }, function (err, data) {
    if (err) {
      console.log("Error occurred: " + err);
      return;
    }

    var songs = data.tracks.items;
    //console.log(songs)
    for (var i = 0; i <songs.length; i++) {
      console.log(i);
      console.log("Artist:" + songs[i].artists[0].name);
      console.log("Song's name: " + songs[i].name);
      console.log("Song's preview: " + songs[i].preview_url);
      console.log("Album: " + songs[i].album.name);
      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    }
  }
  );
}

/*`node liri.js movie-this '<movie name here>'` */

function movieThis(movieName) {
  if (!movieName) {
    movieName = "Mr. Nobody"; //default Movie
    console.log("If you haven't watched 'Mr. Nobody', then you should: <http://www.imdb.com/title/tt0485947/>\n" +
      "\nIt's on Netflix!\n");
  };

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  //console.log(queryUrl);

  axios.get(queryUrl).then(
    function output(response) {
      if (!response.data.Title) {
        console.log("Check your spelling");

      } else {
        // console.log(response);
        console.log("************************************************************************************")
        console.log("Title of the movie: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log(response.data.Ratings[1].Source + " Rating: " + response.data.Ratings[1].Value);
        console.log("Origin Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log("***********************************************************************************");
      }
    }
  );
}

/* `node liri.js do-what-it-says`*/

function doThat() {

  fs.readFile("random.txt", "utf8", function (error, data) {

    // It will log the error to the console.
    if (error) {
      return console.log(error);
    }
    // Data here
    //console.log(data);
    var dataArr = data.split(",");
    //console.log(dataArr);
    //console.log(dataArr[0])
    var newCommand = dataArr[0];
    var newInput = dataArr[1];

    if (newCommand === "movie-this") {
      movieThis(newInput);
    }
    if (newCommand === "concert-this") {
      concertThis(newInput)
    }
    if (newCommand === "spotify-this-song") {
      spotifyThis(newInput)
    }
  });
}


