
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAZ8pIfOcCQtoCzhvTWCg4mHFvJ1oQLlRs",
      authDomain: "kwitter-98a25.firebaseapp.com",
      databaseURL: "https://kwitter-98a25-default-rtdb.firebaseio.com",
      projectId: "kwitter-98a25",
      storageBucket: "kwitter-98a25.appspot.com",
      messagingSenderId: "630989183451",
      appId: "1:630989183451:web:5468b56f8a495acfe22ffe"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
