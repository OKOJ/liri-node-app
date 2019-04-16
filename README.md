# LIRI-NODE-APP
LIRI will search Bands in Town for concerts, Spotify for songs and OMDB for movies.


### INSTRUCTIONS
After downloading LIRI run:

```npm install```


##### Each Command Should Do:

   * `concert-this`
   
   > Will search the Bands in Town Artist Events API for an artist and render the following information about each event to the            terminal:

     - Name of the venue
     - Venue location
     - Date of the Event (use moment to format this as "MM/DD/YYYY")
     
 ###### DEMO
    
   ![Apr 15 2019 8_23 PM](https://user-images.githubusercontent.com/43624894/56216011-e2fc1480-601d-11e9-9902-ff1fc1584685.gif)
   
   
   
   * `spotify-this-song`
   
   > Will show the following information about the song in your terminal/bash window:

     - Artist(s)
     - The song's name
     - A preview link of the song from Spotify
     - The album that the song is from
     - If no song is provided then your program will default to "The Sign" by Ace of Base.
     
 ###### DEMO     
     
   ![Apr 16 2019 8_07 AM](https://user-images.githubusercontent.com/43624894/56216616-feb3ea80-601e-11e9-8edf-13ddacf0868f.gif)
   

   
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
     
 ###### DEMO
 
   ![Apr 16 2019 8_14 AM](https://user-images.githubusercontent.com/43624894/56217060-cd87ea00-601f-11e9-8398-ba2fe26534e3.gif)

     
   
   * `do-what-it-says`

   > It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
   
 ###### DEMO
 
   ![Apr 16 2019 8_20 AM](https://user-images.githubusercontent.com/43624894/56217517-a1209d80-6020-11e9-94c1-e7bce77e25a9.gif)
   
   
   
   
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
