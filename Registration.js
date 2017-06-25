

//Registration method
function fnRegisterMom(){
	alert("in registration");
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
    var address1 = $("#address1-input").val().trim();
    var address2 = $("#address2-input").val().trim();
    var city = $("#city-input").val().trim();
    var state = $("#state-input").val().trim();
    var zipcode = $("#zipcode-input").val().trim();
    var email = $("#email-input").val().trim();
    var userId = email.substring(0, email.indexOf("@"));
    var phone = $("#phone-input").val().trim();
    var password = $("#password-input").val().trim();
    var regdate = new Date();
    var childage = $("#childage-input").val().trim();
    if($("#chkboy").is(":checked")){
        var boygirl = "boy";
    }
    else if($("#chkgirl").is(":checked")){
        var boygirl = "girl";
    }
    else{
        var boygirl = "Not Specified";
    }
    if($("#chkRemember").is(":checked")){
        var remUser = "yes";
    }
    else{
        var remUser = "no";
    }
    
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

  

}

//Pull Registration data
