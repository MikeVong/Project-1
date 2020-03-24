var gameID;
var gameSearch;

$("#search-button").on("click", function(event) 
    {
    event.preventDefault();
    if ($("#search-game").val().trim() === "")
    {
		$('#\\#myModal').modal('show');
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
			}).then(function()
				{
				var idQueryURL = "https://api.rawg.io/api/games/"+ gameID;
				$.ajax({
					url:idQueryURL,
					method:"GET",
				}).then(function(idResponse)
				{
					console.log(idResponse)
					$("#cover-goes-here").html("<img class='card animated bounceInLeft' style='width: 350px;' src=" + idResponse.background_image + ">");
					var height = $("#cover").height()
					$(".scroll").css("max-height",""+height+"");
					$("#game-description").html("<div class = 'card animated delay-5s fadeIn scroll'>"+idResponse.description+"</div>");
					$("#release-date").html("<h4 class='card'>" + idResponse.released + "</h4>");
					$("#genre").html("<h4 class='card'>" + idResponse.genres[0].name + "</h4>");
					$("#made-by").html("<h4 class='card'>Developed by: " + idResponse.developers[0].name + "</h4>");
					$("#rating").html("<h4 class='card'>"+idResponse.rating+"/5</h4>");
					$("#website").html("<h4 class='card animated delay-2s bounceInLeft'><a href='"+idResponse.website+"'>"+idResponse.name+"'s Website</a></h4>");
					$("#name-goes-here").html("<h4 class= 'card animated delay-1s bounceInLeft'>"+idResponse.name);
					$("#platform").empty();
					for (var i=0;i<4;i++)
						{
						var pName =idResponse.parent_platforms[i].platform.name;
						if(pName ==="PC")
							{
							var newCol =$("<div>");
							newCol.addClass("col-sm-3");
							var pImg = $("<img>");
							pImg.attr("width", "50");
							pImg.attr("height", "50");
							pImg.addClass("card");
							pImg.addClass("cardspace");
							pImg.attr("src","./assets/images/pc.png");
							newCol.append(pImg);
							$("#platform").append(newCol);
							}
							else if (pName === "PlayStation")
							{
							var newCol =$("<div>");
							newCol.addClass("col-sm-3");
							var pImg = $("<img>");
							pImg.attr("width", "50");
							pImg.attr("height", "50");
							pImg.addClass("card");
							pImg.addClass("cardspace");
							pImg.attr("src","./assets/images/ps4.jpg");
							newCol.append(pImg);
							$("#platform").append(newCol);
							}
							else if (pName === "Xbox")
							{
							var newCol =$("<div>");
							newCol.addClass("col-sm-3");
							var pImg = $("<img>");
							pImg.attr("width", "50");
							pImg.attr("height", "50");
							pImg.addClass("card");
							pImg.addClass("cardspace");
							pImg.attr("src","./assets/images/xbox.jpg");
							newCol.append(pImg);
							$("#platform").append(newCol);
							}
							else if (pName === "iOS")
							{
							var newCol =$("<div>");
							newCol.addClass("col-sm-3");
							var pImg = $("<img>");
							pImg.attr("width", "50");
							pImg.attr("height", "50");
							pImg.addClass("card");
							pImg.addClass("cardspace");
							pImg.attr("src","./assets/images/ios.png");
							newCol.append(pImg);
							$("#platform").append(newCol);
							}
						};

					});
				});
			};