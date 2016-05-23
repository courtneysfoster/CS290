
var mysql = require("mySQL");

var pool = mysql.createPool({
	host : "loclahost",
	user : "student",
	password : "default",
	resave: true,
    saveUninitialized: true,
	database : "student"

})

module.exports.pool = pool;
    