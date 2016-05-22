
var express = require("express");
var app = express();

var mysql = require("./dbcon.js");

var handlebars = require("express-handlebars").create(defaultLayout:"Main"));

app.engine("handlebars", handlebars.engine);
app.set("view-engine", "handlebars");
app.set("port", 3000);

var session = require("express-session");
app.use(session({secret:"superSecretPassword"}));

app.get("/", function(req, res,next){
	res.render("home");
}

app.get("/count", function(req,res){
	var context = {};
	context.count = req.session.count || 0;
	req.session.count = context.count + 1;
	res.render("counter", context);
});

app.post("/count", function(req, res){
	var context = {};
	if(req.body.command === "resetCount"){
		req.session.count = 0;
	}else{
		context.err = true;
	}
	context.cout + req.session.count || 0;
	req.session.count = context.count + 1;
	res.render("counter", context);
});

app.get('/create-session-table',function(req,res,next){
  var context = {};
  mysql.pool.query("DROP TABLE IF EXISTS tblSessions", function(err){
    var createString = "CREATE TABLE tblSessions(" +
    "id INT PRIMARY KEY AUTO_INCREMENT," +
    "username VARCHAR(255) NOT NULL," +
    "loggedIn BOOLEAN," +
    "LoginDateTime DATE)";
    mysql.pool.query(createString, function(err){
      context.results = "Table Created!";
      res.render('home',context);
    })
  });
});