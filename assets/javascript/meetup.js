$( document ).ready(function() {

$("#showMyMeetupGroups").on("click", function(event) {

        
        event.preventDefault();

        
        var groupSearch = $("#myGroups").val();

        
        var queryURL = "https://api.meetup.com/recommended/groups?&sign=true&key=1931492317559664c262647694b5a5a";
        //https://api.meetup.com/recommended/groups?&sign=true&key=7568744d461f381f2147263183a6277
      
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	
        	//var responseJson = JSON.stringify(response);
        	
        	$("#myGroups").append("<ul>");

        	for(var i = 0; i < response.length; i++) {
        		var details = response[i];

        		$("#myGroups").append("<li>" + details.name + "</li>")

        	}
        	$("#myGroups").append("</ul>");

        });

    
});

});

// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
// //$("#myBtn").on("click", function(event) {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
// //$("#close").on("click", function(event) {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
