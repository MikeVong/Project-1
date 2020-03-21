
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
	var gameInfoSearch = $("#search-game").val().trim();
	var infoQueryURL = "https://api.rawg.io/api/games?search="+ gameInfoSearch;
	$("#cover-goes-here").empty();
	$.ajax({
			url:infoQueryURL,
			method:"GET",
		}).then(function(infoResponse)
			{
			console.log(infoResponse);
			$("#cover-goes-here").html("<img class='card' style='width:300px' src="+ infoResponse.results[0].background_image + ">");
			});
};