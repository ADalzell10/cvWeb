const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
// view directory for product and form views
app.set("views", path.join(__dirname, "views"));

app.get("/", function(req, res){
   res.render("index");
})

app.listen(3000, function(){
   console.log("Listening on port 3000");
})