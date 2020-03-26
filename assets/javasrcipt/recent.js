

// Your web app's Firebase configuration
var config = 
    {
    apiKey: "AIzaSyBBiv6rFKaBEsA2VMz2PadDyVz2PKzASXI",
    authDomain: "project-1-70719.firebaseapp.com",
    databaseURL: "https://project-1-70719.firebaseio.com",
    storageBucket: "project-1-70719.appspot.com"
    };
// Initialize Firebase
firebase.initializeApp(config);


var database = firebase.database();

$("#search-button").on("click", function(event) 
    {
    event.preventDefault();
    var rSearch= $("#search-game").val().trim();
    
    var newRecent=
        {
        rSearch: rSearch,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
        };

    database.ref().push(newRecent);
    $(".recentItem:first").addClass("animated hinge");
    setTimeout(function() {
        $(".recentItem:first").remove();
    }, 1000);
    

    });

    database.ref().orderByChild("dateAdded").limitToLast(5).on("child_added", function(childSnapshot) 
    {
        
        var recentDisplay = childSnapshot.val().rSearch;
        var newRow = $("<div>");
        newRow.addClass("card recentItem animated fadeIn");
        newRow.append(recentDisplay);
        $("#recentTable").append(newRow);

        
    });