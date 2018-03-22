var config = {
    apiKey: "AIzaSyAZVk8YI5PR8nfXyoSjvCbBTBB01_RhbTY",
    authDomain: "meetpie-3c64a.firebaseapp.com",
    databaseURL: "https://meetpie-3c64a.firebaseio.com",
    projectId: "meetpie-3c64a",
    storageBucket: "meetpie-3c64a.appspot.com",
    messagingSenderId: "941417946944"
};
firebase.initializeApp(config);


function loginMeetPie() {
    var googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(googleProvider);
    firebase.auth().getRedirectResult().then(function (result) {
            console.log(result);
            var user = result.user;
        }).catch(function (error) {
            console.log(error);
        });

}

loginMeetPie();

$("#google-button").on("click", loginGoogle);