// import needed information
const path = require('path');
const friends = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // API GET Request
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friends array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

  // will handle the user input
   const userInput = req.body;
      let userResponse = userInput.scores;
      let match = {
        Name: "",
        Photo: "",
        difference: 500
      };

      // loop through the friends array
      for (var i = 0; i < friends.length; i++) {

        
        var totalDifference = 0;
        for (var j = 0; j < userResponse.length; j++) {
          totalDifference += Math.abs(friends[i].scores[j] - userResponse[j]);
          
          if (totalDifference <= match.difference){
              match.name = friends[i].name;
              match.photo = friends[i].photo;
              match.difference = totalDifference;
          }
        }
      }

      friends.push(userInput);

      res.json(match);

    });
  };