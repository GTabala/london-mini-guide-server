// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the cities JSON
const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");
const stratford = require("./data/Stratford.json");


const cities = {"stratford": stratford,"harrow": harrow, "heathrow": heathrow};

app.get("/", function (request, response) {
  response.send("You are welcome!");
});
app.get("/:city/:category", function (request, response) {
  const cityName = request.params.city;
  const category = request.params.category;
  
   response.json((cities[cityName.toLocaleLowerCase()])[category]);
});

const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
//Start our server so that it listens for HTTP requests!
// app.listen(3000, () => console.log("Server is listening on port 3000. !"));