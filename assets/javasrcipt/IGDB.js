var gameInfoSearch = "minecraft";
var infoQueryURL = "https://api.rawg.io/api/games?search="+ gameSearch;

function getGame(){
	$.ajax({
			url:infoQueryURL,
			method:"GET",
		}).then(function(response)
			{
			console.log(response);
			});
};
getGame();