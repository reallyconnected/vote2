

const db = require('./db_access');
const Express = require('express');
const OurLogger = require('./logger');

const os = require('os');
const app = Express();
const path = require('path');


// This allows us to deal with google stuff that we get from the client 
// This is hooked up from the google website for firebase.
// https://console.firebase.google.com/u/0/project/vote2-auth/settings/serviceaccounts/adminsdk
const admin = require('firebase-admin');
// Please note, this env variable should point to your authentication 
// file for google services. In our case:
// ./vote2-auth-firebase-adminsdk-AAAAA-AAAAAAAAAAA.json
const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS)
const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://vote2-auth.firebaseio.com"
});

app.set('view engine', 'ejs');
// Please note this dirty hack that allows us to keep the views directory out of the build directory..
app.set('views', path.join(__dirname, "..", "views"));
app.use(Express.static('views'));

// Allows us to pass POSTs from JSON and URL encoded ways.
app.use(Express.json());
app.use(Express.urlencoded());

var port = process.env.PORT || 3000;

console.log(`Arch: ${os.arch()}`);
console.log(`HostName: ${os.hostname()}`);


// Create Authenticate Middleware 
function isAuthenticated(request: any, response: any, next: any) {
    // Check if the user is logged in . 
    // If they are, attach the user to the request object. 
    // If they are not, send them to the login page. 

}

app.get('/hcc', isAuthenticated, (request, response) => {
    response.render('hcc.ejs');
});

app.get("/", (request, response) => {
    response.render('home.ejs');
});

app.post("/", (request, response) => {
    if (request.body) {
        response.send("Preparing your " + request.body.breakfast + " now!");
    } else {
        response.send("You can order something you know...");
    }
});

app.listen(port, f => {
    console.log("App running on port:" + port);
});


// Test database connection.
// db.testConnection();

