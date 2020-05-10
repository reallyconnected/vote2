
function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((data) => {
            console.log("We have data back....");
            console.log(data);
            document.getElementById("outputs").value = JSON.stringify(data.credential.idToken);
        })

        .catch((error) => {
            document.getElementById("outputs").value = JSON.stringify(error);
            console.log(error);
        })
}


function checkIfLoggedIn() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // Do logged in stuff
            console.log(user);
            console.log("User was loggedin...");
        } else {
            // Do not logged in stuff
            console.log("User was not logged in...");
        }
    });
}

function signOut() {
    firebase.auth().signOut();
}

window.onload = function () {
    checkIfLoggedIn();
};

