
var mysql = require("mySQL");
var pool = msql.createPool({
	host : "loclahost",
	user : "student",
	password : "default",
	database : "student"
})

module.exports.pool = pool;
