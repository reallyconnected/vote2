const mysql = require('mysql');
var port = process.env.PORT || 3000;

function testConnection() {

    console.log("Creating database connection...");
    // Our database control class. 
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.VOTE2_APP_DB_PASSWORD,
        database: "vote2",
    })
    // Attempt to connect to our database...
    connection.connect(err => {
        if (err) {
            console.log("Connection Error", err.stack);
        } else {
            console.log("Connected...");
        }
    });

    const ourQuestions = connection.query("SELECT * from tbl_questions", (err, res) => {
        if (err) throw err;
        console.log("Our Questions are:");
        console.log(res);
    });


}




module.exports.testConnection = testConnection;