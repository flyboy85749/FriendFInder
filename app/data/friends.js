// This array will hold all of our "friends"

const friends = [
  {
    name: "Rachel",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/JenniferAnistonHWoFFeb2012.jpg/220px-JenniferAnistonHWoFFeb2012.jpg",
    scores: [3, 5, 2, 4, 1, 2, 4, 5, 3, 1]
  },
  {
    name: "Monica",
    photo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/CourteneyCoxFeb09.jpg",
    scores: [5, 5, 4, 3, 2, 4, 2, 1, 1, 3]
  },
  {
    name: "Phoebe",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Lisa_Kudrow_3.jpg/220px-Lisa_Kudrow_3.jpg",
    scores: [4, 4, 3, 5, 2, 2, 1, 5, 4, 3]
  },
  {
    name: "Joey",
    photo: "https://en.wikipedia.org/wiki/File:X_217c5312.jpg",
    scores: [1, 1, 1, 1, 1, 3, 1, 1, 2, 1]
  },
  {
    name: "Chandler",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Matthew_Perry_2013.jpg/220px-Matthew_Perry_2013.jpg",
    scores: [2, 2, 2, 2, 2, 3, 4, 3, 2, 5]
  },
  {
    name: "Ross",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/David_Schwimmer_2011.jpg/220px-David_Schwimmer_2011.jpg",
    scores: [2, 3, 3, 3, 4, 5, 5, 3, 1, 2]
  }

];
// console.log(friends);

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
