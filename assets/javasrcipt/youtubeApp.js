// api key from youtube v3
var apiKey = "AIzaSyAVtUWiVEDWPVgD6HebwsUXHJ3PP6qj9gE";
// api url website link
var queryURL ="https://www.googleapis.com/youtube/v3/search";
// search var
var gameSearch = "final fintasy game detail";
// search option needed for youtube v3
var options =
    {
    key: apiKey,
    q: gameSearch,
    part: 'snippet',
    maxResults: 3,
    type: 'video',
    videoEmbeddable: true,
    };

// create a function to get the youtube 
function getVideo()
    {
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
                for (var i = 0; i < response.items.length; i++)
                        {
                        var videoLink = response.items[i].id.videoId;
                        var newRow=$("<div>");
                        newRow.addClass("col-md-4");
                        var img = $("<iframe>");
                        img.attr("width","380");
                        img.attr("height", "280");
                        img.attr("src", "http://www.youtube.com/embed/"+ videoLink);
                        img.addClass("card");
                        newRow.append(img);
                        $("#youtubeHere").append(newRow);
                        }
                    
                    
                });
    };
//run the function
getVideo();