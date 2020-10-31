// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");
const stratford = require("./data/Stratford.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

app.get("/pharmcies", function (request, response) {
  response.send("retruns an array of pharmacies in a specific area");
});
app.get("/colleges", function (request, response) {
  response.send("returns colleges list for stratford");
});
app.get("/doctors", function (request, response) {
  response.send("returns doctors list for stratford");
});
app.get("/hospitals", function (request, response) {
  response.send("returns hospitals list for stratford");
});





// app.get("/search", function(request, response) {
//   let term = request.query.term;
//   let quoteHas = request.query.quotehas;  
//   let authorHas = request.query.authorhas;  
//   (quoteHas && authorHas) ? response.json(quotes.filter(item => item.quote.toLowerCase().includes(quoteHas.toLowerCase()) && 
//   item.author.toLowerCase().includes(authorHas.toLowerCase()))):
//   quoteHas ?  response.json(quotes.filter(item => item.quote.toLowerCase().includes(quoteHas.toLowerCase()))):  
//   authorHas ? response.json(quotes.filter(item => item.author.toLowerCase().includes(authorHas.toLowerCase()))):
//   response.json(quotes.filter(item => item.quote.toLowerCase().includes(term.toLowerCase()) || 
//   item.author.toLowerCase().includes(term.toLowerCase())));
// });

// //...END OF YOUR CODE

// //You can use this function to pick one element at random from a given array
// //example: pickFromArray([1,2,3,4]), or
// //example: pickFromArray(myContactsArray)
// //
// function pickFromArray(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
//Start our server so that it listens for HTTP requests!
//app.listen(3000, () => console.log("Server is listening on port 3000. !"));