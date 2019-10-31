// import required files
const friends = require("../data/friends");

// export the module so it is available elsewhere
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // show all the friends at this route (path)
  app.post("/api/friends", function(req, res) {
    let totalDifference = 0;

    // find the friend that most closely matches the user input
    let bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

// pulls in the data from the user input form
    let userData = req.body;
    let userName = userData.name;
    let userScores = userData.scores;

    // convert scores into integers so we can compare with friendDifference value
    let b = userScores.map(function(item) {
      return parseInt(item, 10);
    });

    // the userData Object
    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };

    // make sure things are working
    console.log("Name: " + userName);
    console.log("User Score: " + userScores);

    // reduce the array to a single value to be compared
    var sum = b.reduce((a, b) => a + b, 0);

    console.log("User Scores Sum =  " + sum);
    console.log("Closest Match: " + bestMatch.friendDifference);
    console.log("****************************************");

    // loop through the existing freinds array
    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;
      console.log("Difference Total: " + totalDifference);
      console.log("Smallest Difference: " + bestMatch.friendDifference);

      // let bestfriends score equal the sum of the friend's score
      let bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total friend score " + bfriendScore);

      // find the absolute difference in the scores
      totalDifference += Math.abs(sum - bfriendScore);
      console.log("-------------------------> " + totalDifference);

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
      console.log(totalDifference + " Total Difference");
    }
    // print the name of the best match
    console.log(bestMatch);

    // add the user's information to the friends array
    friends.push(userData);

    // confirm they were added
    console.log("New user added");
    console.log(userData);
    res.json(bestMatch);
  });
};