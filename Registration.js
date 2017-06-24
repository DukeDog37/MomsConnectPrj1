//Registration method
function fnRegisterMom(){
	var config = {
	    apiKey: "AIzaSyA2luHS-fHr1w65HpiL7HWS2NO8-r-pFAQ",
	    authDomain: "team4empdataproject.firebaseapp.com",
	    databaseURL: "https://team4empdataproject.firebaseio.com",
	    projectId: "team4empdataproject",
	    storageBucket: "",
	    messagingSenderId: "863126920899"
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
    var phone = $("#phone-input").val().trim();
    var password = $("#password-input").val().trim();
    var regdate = moment($("#regdate-input").val().trim(), "MM/DD/YY").format("X");
    var childage = $("#childage-input").val().trim();
    var boygirl = $("#boygirl-input").val().trim();


      database.ref().push({
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
        boygirl: boygirl
      });
}
//added text
//Pull Registration data
