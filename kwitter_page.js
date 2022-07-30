//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCVhR8RVh7h2VPQjEnHfLw87E3_V9Vim2o",
      authDomain: "kwitter2-975b6.firebaseapp.com",
      projectId: "kwitter2-975b6",
      storageBucket: "kwitter2-975b6.appspot.com",
      messagingSenderId: "338670635083",
      appId: "1:338670635083:web:e8f915af999c8f958265ce"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();