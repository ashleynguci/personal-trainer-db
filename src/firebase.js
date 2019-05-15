import * as firebase from "firebase/app";
import "firebase/auth";
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA9tIBS5gmrkOktignuJAbjO5UGuoADpLY",
    authDomain: "personal-trainer-db.firebaseapp.com",
    databaseURL: "https://personal-trainer-db.firebaseio.com",
    projectId: "personal-trainer-db",
    storageBucket: "personal-trainer-db.appspot.com",
    messagingSenderId: "171534008342",
    appId: "1:171534008342:web:9c77343a3dac8311"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>