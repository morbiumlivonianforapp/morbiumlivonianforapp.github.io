firebase.auth().onAuthStateChanged(function(user) {

  if(user!=null){
   var email_id = user.email;
      var Mail= user.email;
      document.getElementById("mailid").innerHTML = Mail;
      var id= user.email.split('@')[0];
      console.log(id); 
   
  }
  else{
     window.location.href="/login.html";
     return;
  }

});



