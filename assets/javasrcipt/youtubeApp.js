
var apiKey = "AIzaSyAVtUWiVEDWPVgD6HebwsUXHJ3PP6qj9gE";
var queryURL ="https://www.googleapis.com/youtube/v3/search";
var gameSearch = "final fintasy game detail";
var options =
    {
    key: apiKey,
    q: gameSearch,
    part: 'snippet',
    maxResults: 3,
    type: 'video',
    videoEmbeddable: true,
    };


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
                        //var newCol=$("<div>");
                        //newCol.addClass("col-md-4");
                        var img = $("<iframe>");
                        //img.attr("title","YouTube video player");
                        //img.attr("type",'\"text/html\"');
                        img.attr("width","380");
                        img.attr("height", "280");
                        img.attr("src", "http://www.youtube.com/embed/"+ videoLink);
                        img.addClass("card");
                        //newRow.append(newCol);
                        //newCol.append(img);
                        newRow.append(img);
                        $("#youtubeHere").append(newRow);
                        }
                    
                    
                });
    };

getVideo();