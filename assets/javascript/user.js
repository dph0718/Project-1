var config = {
    apiKey: "AIzaSyAZVk8YI5PR8nfXyoSjvCbBTBB01_RhbTY",
    authDomain: "meetpie-3c64a.firebaseapp.com",
    databaseURL: "https://meetpie-3c64a.firebaseio.com",
    projectId: "meetpie-3c64a",
    storageBucket: "meetpie-3c64a.appspot.com",
    messagingSenderId: "941417946944"
};
firebase.initializeApp(config);

var database = firebase.database();

function displayUser() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("user: " + firebase.auth().currentUser.displayName);
            console.log("email: " + firebase.auth().currentUser.email);
            console.log("uid: " + firebase.auth().currentUser.uid);
            console.log("photoUrl: " + firebase.auth().currentUser.photoUrl);

            if (user !== null) {
                var displayName = user.displayName;
                var email = user.email;
                var photoURL = user.photoURL;
                var uid = uid;

                var user = {
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL,
                    uid: uid
                }
            
                database.ref().push("users/" + user);
            }
        }else {
            // window.location.href="../../index.html"
            // No user is signed in.
        }
    }, function (error) {
        console.log(error);
    });
};

$("window").on('load', displayUser);