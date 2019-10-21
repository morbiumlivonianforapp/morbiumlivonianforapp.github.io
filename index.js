firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var id= user.email.split('@')[0];
      if(id=="admin")
      {
         window.location.href="users/admin/admin.html";
      }

     else
     {

        window.location.href="api/demos/code/index.html";

     }

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

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
  var userEmail = document.getElementById("email_fieldx").value;
  var userPass = document.getElementById("password_fieldx").value;
  
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
