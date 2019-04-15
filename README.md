# LIRI-NODE-APP
LIRI will search Bands in Town for concerts, Spotify for songs and OMDB for movies.


### INSTRUCTIONS
After downlouding LIRI run:

```npm install```

#### DEMO


##### Each Command Should Do:

   * `concert-this`
   
   > Will search the Bands in Town Artist Events API for an artist and render the following information about each event to the            terminal:

     - Name of the venue
     - Venue location
     - Date of the Event (use moment to format this as "MM/DD/YYYY")
    
   
   * `spotify-this-song`
   
   > Will show the following information about the song in your terminal/bash window:

     - Artist(s)
     - The song's name
     - A preview link of the song from Spotify
     - The album that the song is from
     - If no song is provided then your program will default to "The Sign" by Ace of Base.
   

   * `movie-this`
   
   > Will output the following information to your terminal/bash window:

     - Title of the movie.
     - Year the movie came out.
     - IMDB Rating of the movie.
     - Rotten Tomatoes Rating of the movie.
     - Country where the movie was produced.
     - Language of the movie.
     - Plot of the movie.
     - Actors in the movie.
     - If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

     
   * `do-what-it-says`

   > It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.


### TECHNOLOGIES USED

     * Javascript
     * Nodejs
       * Node packages:
         - Node-Spotify-API
         - Axios 
         - Moment
         - DotEnv
      * APIs used:
        - Bands in Town
        - OMDB



## :notes:	Please Enjoy!
