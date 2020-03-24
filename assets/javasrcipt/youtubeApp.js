// api key from youtube v3
var apiKey = "AIzaSyAVtUWiVEDWPVgD6HebwsUXHJ3PP6qj9gE";
// api url website link
var queryURL ="https://www.googleapis.com/youtube/v3/search";



$("#search-button").on("click", function(event) 
    {
    event.preventDefault();
    if ($("#search-game").val().trim() === "")
    {
        $('#\\#myModal').modal('show');
    }
    else
    {
        getVideo();

    }
    
    });

    function getVideo()
    {
    var gameSearch = $("#search-game").val().trim();
    gameSearch = gameSearch + " review";
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





