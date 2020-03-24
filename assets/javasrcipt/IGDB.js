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
					$("#rating").html("<h4 class='card'>"+idResponse.rating+"/5</h4>")
					$("#website").html("<h4 class='card'><a href='"+idResponse.website+"'>"+idResponse.name+"'s Website</a></h4>");
				});

				//---------------------
			$("#cover-goes-here").html("<img class='card' style='width:300px' src=" + infoResponse.results[0].background_image + ">");
			$("#game-description").html("<h2>" + infoResponse.results[0].name + "</h2>");
			$("#release-date").html("<h4>" + infoResponse.results[0].released + "</h4>");
			$("#genre").html("<h4>" + infoResponse.results[0].genres[0].name + "</h4>");
			
			$("#platform").empty();
			for (var i=0;i<4;i++)
			{
				
				var pName =infoResponse.results[0].platforms[i].platform.name;
				if(pName ==="PC")
				{
				var newCol =$("<div>");
				newCol.addClass("col-sm-3");
				var pImg = $("<img>");
				pImg.attr("width", "100");
				pImg.attr("height", "100");
				pImg.addClass("data-image");
				pImg.attr("src","./assets/images/pc.png");
				newCol.append(pImg);
				$("#platform").append(newCol);
				}
				else if (pName === "PlayStation 4")
				{
				var newCol =$("<div>");
				newCol.addClass("col-sm-3");
				var pImg = $("<img>");
				pImg.attr("width", "100");
				pImg.attr("height", "100");
				pImg.addClass("data-image");
				pImg.attr("src","./assets/images/ps4.jpg");
				newCol.append(pImg);
				$("#platform").append(newCol);
				}
				else if (pName === "Xbox One")
				{
				var newCol =$("<div>");
				newCol.addClass("col-sm-3");
				var pImg = $("<img>");
				pImg.attr("width", "100");
				pImg.attr("height", "100");
				pImg.addClass("data-image");
				pImg.attr("src","./assets/images/xbox.jpg");
				newCol.append(pImg);
				$("#platform").append(newCol);
				}
				else if (pName === "iOS")
				{
				var newCol =$("<div>");
				newCol.addClass("col-sm-3");
				var pImg = $("<img>");
				pImg.attr("width", "100");
				pImg.attr("height", "100");
				pImg.addClass("data-image");
				pImg.attr("src","./assets/images/ios.png");
				newCol.append(pImg);
				$("#platform").append(newCol);
				}

				/*
				var newCol =$("<div>");
				newCol.addClass("col-sm-3");
				var pImg = $("<img>");
				pImg.attr("width", "100");
				pImg.attr("height", "100");
				pImg.addClass("data-image");
				pImg.attr("src","./assets/images/pc.png");
				newCol.append(pImg);
				$("#platform").append(newCol);
				*/
			};
			//$("#platform1").html("<img id= 'pix' src='./assets/images/pc.png'>");
			//$("#platform2").html("<img id= 'pix' src='./assets/images/ps4.jpg'>");
			//$("#platform3").html("<img id= 'pix' src='./assets/images/xbox.jpg'>");
			//$("#platform4").html("<img id= 'pix' src='./assets/images/ios.png'>");

			
			});
			
};