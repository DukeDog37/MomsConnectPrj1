

//Registration method
function fnRegisterMom(){
	
    var config = {
    apiKey: "AIzaSyDrLO-RSZ-B6BD4gxJXqCOnMLA19DFHcsI",
    authDomain: "momsconnection-63998.firebaseapp.com",
    databaseURL: "https://momsconnection-63998.firebaseio.com",
    projectId: "momsconnection-63998",
    storageBucket: "momsconnection-63998.appspot.com",
    messagingSenderId: "102438011730"
  };

    firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();
    // Capture Button Click
    event.preventDefault();
    
    var name = $("#name-input").val().trim();
    //console.log(name);
    var address1 = $("#address1-input").val().trim();
    //console.log(address1);
    var address2 = $("#address2-input").val().trim();
    //console.log(address2);
    var city = $("#city-input").val().trim();
    //console.log(city);
    var state = $("#state-input").val().trim();
    //console.log(state);
    var zipcode = $("#zipcode-input").val().trim();
    //console.log(zipcode);
    var email = $("#email-input").val().trim();
    //console.log(email);
    var userId = email.substring(0, email.indexOf("@"));
    //console.log(userId);
    var phone = $("#phone-input").val().trim();
    //console.log(phone);
    var password = $("#password-input").val().trim();
    //console.log(password);
    var regdate = new Date();
    
    var childage = $("#childage-input").val().trim();
    
    var boygirl = "Not Specified";
    boygirl = $('input[name=optradio]:checked').val();
    
    if($("#chkRemember").is(":checked")){
        var remUser = "yes";
    }
    else{
        var remUser = "no";
    }
    console.log(remUser);
      database.ref('moms/' + userId).set({
        name: name,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        zipcode: zipcode,
        email: email,
        phone: phone,
        password: password,
        regdate: regdate,
        childage: childage,
        boygirl: boygirl,
        rememberUser: remUser
      });

  
//alert("hold on");
}

//Pull Registration data
function fnFetchMembers(){
    
    var config = {
    apiKey: "AIzaSyDrLO-RSZ-B6BD4gxJXqCOnMLA19DFHcsI",
    authDomain: "momsconnection-63998.firebaseapp.com",
    databaseURL: "https://momsconnection-63998.firebaseio.com",
    projectId: "momsconnection-63998",
    storageBucket: "momsconnection-63998.appspot.com",
    messagingSenderId: "102438011730"
  };

    firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();
    
    //var userId = firebase.auth().currentUser.uid;
    var momsRef = database.ref('moms');
        momsRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        console.log(childData); //will log out each mom record
        console.log(childSnapshot.val().name);
        //load each result into the table on the members.html form
        // full list of items to the well
      $("#full-member-list").append("<div class='well'><span id='name'> " + childSnapshot.val().name +
        " </span><span id='email'> " + childSnapshot.val().email +
        " </span><span id='address'> " + childSnapshot.val().address1 + " " + childSnapshot.val().address2 + 
        " " + childSnapshot.val().city + ", " + childSnapshot.val().state + " " + childSnapshot.val().zipcode + 
        " </span><span id='childinfo'> " + childSnapshot.val().boygirl + ": " + childSnapshot.val().childage + " </span></div>");

        });
              
  // ...
    
        // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

    
  // ...
};

  
  
