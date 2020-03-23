
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
			$("#cover-goes-here").html("<img class='card' style='width:300px' src=" + infoResponse.results[0].background_image + ">");
			$("#game-description").html("<h2>" + infoResponse.results[0].name + "</h2>");
			$("#release-date").html("<h4>" + infoResponse.results[0].released + "</h4>");
			$("#genre").html("<h4>" + infoResponse.results[0].genres[0].name + "</h4>");
			var platform1 = infoResponse.results[0].platforms[0].platform.name;
			
			
			$("#platform1").html("<img id= 'pix' src='./assets/images/pc.png'>");
			$("#platform2").html("<img id= 'pix' src='./assets/images/ps4.jpg'>");
			$("#platform3").html("<img id= 'pix' src='./assets/images/xbox.jpg'>");
			$("#platform4").html("<img id= 'pix' src='./assets/images/ios.png'>");

			
			});
};