// api key from youtube v3
var apiKey = "AIzaSyAVtUWiVEDWPVgD6HebwsUXHJ3PP6qj9gE";
// api url website link
var queryURL ="https://www.googleapis.com/youtube/v3/search";


 
$("#random-button").on("click", function(event) 
    {
    event.preventDefault();
    getRandom();
    });




$("#search-button").on("click", function(event) 
    {
    event.preventDefault();
    getVideo();
    });

function getRandom()
    {
    
    var game = ["DEVIL MAY CRY 5","FIRE EMBLEM: THREE HOUSES","THE LEGEND OF ZELDA: LINK’S AWAKENING","OUTER WILDS","POKÉMON SWORD AND SHIELD","SEKIRO: SHADOWS DIE TWICE","TELLING LIES","UNTITLED GOOSE GAME"];
    var gameSearch= game[Math.floor(Math.random() * game.length)];
    console.log(gameSearch);

    var options =
        {
        key: apiKey,
        q: gameSearch,
        part: 'snippet',
        maxResults: 3,
        type: 'video',
        videoEmbeddable: true,
        };
    
    $.ajax(
        {
          url: queryURL,
          method: "GET",
          data: options
        })
        .then(function(response) 
                {
                console.log(response);
                console.log(response.items[0].id.videoId);
                $("#youtubeHere").empty();
                for (var i = 0; i < response.items.length; i++)
                        {
                        var videoLink = response.items[i].id.videoId;
                        var newRow=$("<div>");
                        newRow.addClass("col-md-4");
                        var img = $("<iframe>");
                        img.attr("width","380");
                        img.attr("height", "280");
                        img.attr("src", "https://www.youtube.com/embed/"+ videoLink);
                        img.addClass("card");
                        newRow.append(img);
                        $("#youtubeHere").append(newRow);
                        };
                    
                    
                });
    };

    function getVideo()
    {
    var gameSearch = $("#search-game").val().trim();
    var options =
        {
        key: apiKey,
        q: gameSearch,
        part: 'snippet',
        maxResults: 3,
        type: 'video',
        videoEmbeddable: true,
        };
    
    $.ajax(
        {
          url: queryURL,
          method: "GET",
          data: options
        })
        .then(function(response) 
                {
                console.log(response);
                console.log(response.items[0].id.videoId);
                $("#youtubeHere").empty();
                for (var i = 0; i < response.items.length; i++)
                        {
                        var videoLink = response.items[i].id.videoId;
                        var newRow=$("<div>");
                        newRow.addClass("col-md-4");
                        var img = $("<iframe>");
                        img.attr("width","380");
                        img.attr("height", "280");
                        img.attr("src", "https://www.youtube.com/embed/"+ videoLink);
                        img.addClass("card");
                        newRow.append(img);
                        $("#youtubeHere").append(newRow);
                        };
                    
                    
                });
    };




