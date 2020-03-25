

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
        rSearch: rSearch
        };

    database.ref().push(newRecent);

    });

 database.ref().on("child_added", function(childSnapshot) 
    {
    var recentDisplay = childSnapshot.val().recent;
    $("#recent").append(recentDisplay);
    });