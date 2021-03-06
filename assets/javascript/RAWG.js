export var gameName;

var gameID;
var gameInfoSearch;
//checks if search bar isnt empty then runs the game info search
$("#search-button").on("click", function(event)
	{
	event.preventDefault();
	if ($("#search-game").val().trim() === "")
		{
		$('#\\#myModal').modal('show');
		}
		else
			{
			gameInfoSearch = $("#search-game").val().trim().toLowerCase();
			getGame();
			};
	});
//gets game info and displays it on screen
function getGame(){
	var infoQueryURL = "https://api.rawg.io/api/games?search="+ gameInfoSearch;
	$("#platform").empty();
	$("#platform").removeClass("animated delay-3s bounceInRight inline")
	$("#cover-goes-here").empty();
	
	$.ajax({
			url:infoQueryURL,
			method:"GET",
	}).then(function(infoResponse){
		gameID = infoResponse.results[0].id;
		}).then(function(){
			var idQueryURL = "https://api.rawg.io/api/games/"+ gameID;
			$.ajax({
				url:idQueryURL,
				method:"GET",
			}).then(function(idResponse){
				gameName = idResponse.name;
				$("#cover-goes-here").html("<img class='card animated delay-1s bounceInLeft coverImg' src=" + idResponse.background_image + ">");
				$("#game-description").html("<div class = 'card animated delay-4s fadeIn scroll'>"+idResponse.description+"</div>");
				$("#release-date").html("<h4 class='card animated delay-1s bounceInRight'>"+"Release Date:<br>" + moment(idResponse.released).format("MMMM Do, YYYY") + "</h4>");
				$("#genre").html("<h4 class='card animated delay-2s bounceInRight'>"+ "Genres:<br>" + idResponse.genres[0].name + "</h4>");
				$("#made-by").html("<h4 class='card animated delay-2s bounceInLeft'>Developed by:<br>" + idResponse.developers[0].name + "</h4>");
				$("#rating").html("<h4 class='card animated bounceInRight'>"+"Rating:<br>"+idResponse.rating+"/5</h4>");
				$("#website").html("<h4 class='card animated delay-3s bounceInLeft' id='web'><a target='blank' href='"+idResponse.website+"'>"+idResponse.name+"'s Website</a></h4>");
				$("#name-goes-here").html("<h4 class= 'card animated bounceInLeft'>"+idResponse.name);
				$("#platText").html("<h4 class='card animated delay-3s bounceInRight'>Platforms:</h4>")
				$("#platform").empty();
				$("#platform").addClass("animated delay-3s bounceInRight inline")
				//checks for specific platforms to show corresponding pictures
				for (var i=0;i<4;i++)
					{
					var pName =idResponse.parent_platforms[i].platform.name;
					if(pName ==="PC")
						{
						var newCol =$("<span>");
						newCol.addClass("col-sm-3 pad inline");
						var pImg = $("<img>");
						pImg.addClass("card");
						pImg.addClass("cardspace");
						pImg.attr("src","./assets/images/pc.png");
						newCol.append(pImg);
						$("#platform").append(newCol);
						}
						else if (pName === "PlayStation")
							{
							var newCol =$("<span>");
							newCol.addClass("col-sm-3 pad inline");
							var pImg = $("<img>");
							pImg.addClass("card");
							pImg.addClass("cardspace");
							pImg.attr("src","./assets/images/ps4.jpg");
							newCol.append(pImg);
							$("#platform").append(newCol);
							}
						else if (pName === "Xbox")
							{
							var newCol =$("<span>");
							newCol.addClass("col-sm-3 pad inline");
							var pImg = $("<img>");
							pImg.addClass("card");
							pImg.addClass("cardspace");
							pImg.attr("src","./assets/images/xbox.jpg");
							newCol.append(pImg);
							$("#platform").append(newCol);
							}
						else if (pName === "iOS")
							{
							var newCol =$("<span>");
							newCol.addClass("col-sm-3 pad inline");
							var pImg = $("<img>");
							pImg.addClass("card");
							pImg.addClass("cardspace");
							pImg.attr("src","./assets/images/ios.png");
							newCol.append(pImg);
							$("#platform").append(newCol);
							}
						else
							{
							var newCol =$("<span>");
							newCol.addClass("col-sm-3 pad");
							var pImg = $("<img>");
							pImg.addClass("card");
							pImg.addClass("cardspace");
							pImg.attr("src","./assets/images/Other.png");
							newCol.append(pImg);
							$("#platform").append(newCol);
							}
					};
				});
			});
};
//when you press the enter key it clicks the search button
$("#search-game").keypress(function(e) 
	{
	if (e.which == 13) 
		{
			$("#search-button").click();
		};
	});
//when you click a recent item it runs get game
$(document).on("click",".recentItem",function()
	{
	gameInfoSearch = $(this).text();
	getGame();
	});