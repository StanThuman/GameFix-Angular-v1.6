var express = require('express');
var app = express();
var path = require('path');
//require(routes)

//load all script and link
app.use("/bundle", express.static('dist'));
app.use("/app", express.static('client/app'));
app.use("/pics",express.static('client/content'));
app.use(express.static('dist'));

//in case users enter web app directly
var urls = ['/', '/home', '/news', '/videos', '/nintendo','/sony','/microsoft', '/about'];

app.get(urls, (req, res) => {
  console.log("loading index page");  
  res.sendFile( path.join(__dirname, './../client/app/index.html'));
});

app.get('/json', (req, res) => {
  var jsonTest = {
    Name: "name for json test object",
    SRC: "/PATH/to/pic"
  }
  res.send(jsonTest);
});

app.listen(3000, function() {
  console.log("received html request");
});
