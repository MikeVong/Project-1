var gameID;
var gameSearch;

$("#search-button").on("click", function(event) 
    {
    event.preventDefault();
    if ($("#search-game").val().trim() === "")
    {
        alert("Please enter a game");
    }
    else
    {
        getGame();
    }
    
		});
		
function getGame(){
	var gameInfoSearch = $("#search-game").val().trim().toLowerCase();
	var infoQueryURL = "https://api.rawg.io/api/games?search="+ gameInfoSearch;
	$("#cover-goes-here").empty();
	$.ajax({
			url:infoQueryURL,
			method:"GET",
		}).then(function(infoResponse)
			{
			console.log(infoResponse);
			gameID = infoResponse.results[0].id;
			console.log(gameID);
			}).then(function(){
				var idQueryURL = "https://api.rawg.io/api/games/"+ gameID;
				$.ajax({
					url:idQueryURL,
					method:"GET",
				}).then(function(idResponse)
				{
					console.log(idResponse)
					$("#cover-goes-here").html("<img class='card' style='width:300px' src=" + idResponse.background_image + ">");
					$("#game-description").html("<p class='card' id='name'>" + idResponse.description + "</p>");
					$("#release-date").html("<h4 class='card'>" + idResponse.released + "</h4>");
					$("#genre").html("<h4 class='card'>" + idResponse.genres[0].name + "</h4>");
					$("#made-by").html("<h4 class='card'>Developed by: " + idResponse.developers[0].name + "</h4>");
				});
			});
			
};