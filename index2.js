firebase.auth().onAuthStateChanged(function(user) {
  

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function signup(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  
  //Create User with Email and Password
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });
}

function forgot(){
    var auth = firebase.auth();
    var userEmail = document.getElementById("email_field").value;
    auth.sendPasswordResetEmail(userEmail).then(function() {
  // Email sent.
  window.alert('Email Sent');
    }).catch(function(error) {
  // An error happened.
    });
}