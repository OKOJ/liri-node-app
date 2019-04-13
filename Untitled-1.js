    var getMeSpotify = function(songName) {
        if (songName === undefined) {
          songName = "What's my age again";
        }
       
        spotify.search(
          {
            type: "track",
            query: songName
          },
          function(err, data) {
            if (err) {
              console.log("Error occurred: " + err);
              return;
            }
       
            var songs = data.tracks.items;
       
            for (var i = 0; i < songs.length; i++) {
              console.log(i);
              console.log("artist(s): " + songs[i].artists.map(getArtistNames));
              console.log("song name: " + songs[i].name);
              console.log("preview song: " + songs[i].preview_url);
              console.log("album: " + songs[i].album.name);
              console.log("-----------------------------------");
            }
          }
        );
       };
       getMeSpotify();