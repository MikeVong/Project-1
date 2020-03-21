var gameSearch = "minecraft";
var queryURL = "https://api.rawg.io/api/games?search="+ gameSearch;

function getGame(){
	$.ajax({
			url:queryURL,
			method:"GET",
		}).then(function(response)
			{
			console.log(response);
			});
};
getGame();