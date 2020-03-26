// api key from youtube v3
var apiKey = "AIzaSyAVtUWiVEDWPVgD6HebwsUXHJ3PP6qj9gE";
// api url website link
var queryURL ="https://www.googleapis.com/youtube/v3/search";

var gameSearch;
//checks if search bar isnt empty then runs the video search
$("#search-button").on("click", function(event){
    event.preventDefault();
    if ($("#search-game").val().trim() === ""){
        $('#\\#myModal').modal('show');
    }else{
				var gameSearch = $("#search-game").val().trim();
        getVideo();
    }
});
//function that gets video and places them on screen
function getVideo(){
	gameSearch = gameSearch + " review";
	var options ={
			key: apiKey,
			q: gameSearch,
			part: 'snippet',
			maxResults: 3,
			type: 'video',
			videoEmbeddable: true,
	};
	$.ajax({
				url: queryURL,
				method: "GET",
				data: options
	}).then(function(response){
		$("#youtubeHere").empty();
		for (var i = 0; i < response.items.length; i++){
						var videoLink = response.items[i].id.videoId;
						var newRow=$("<div>");
						newRow.addClass("col-md-4");
						var img = $("<iframe>");
						img.attr("width","360");
						img.attr("height", "260");
						newRow.attr("margin-right", "20px");
						img.attr("src", "https://www.youtube.com/embed/"+ videoLink);
						img.addClass("card animated delay-5s bounceInUp");
						newRow.append(img);
						$("#youtubeHere").append(newRow);
		}; 
	});                
};
//Function that runs when you click a recent item
$(document).on("click",".recentItem",function(){
	gameSearch = $(this).text();
	console.log(this);
	console.log(gameSearch);
	getVideo();
});