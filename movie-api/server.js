let express = require("express");
let cors = require("cors")
let data = require("./data.json");

//ek naya server bnade but ye sirf create krti use chalu nhi krti
let server = express();
server.use(cors())
server.get("/movies", function (req, res) {
  res.json(data);
});

server.get("/genre", function (req, res) {
  let allGenreObjects = data.map(function (el) {
    return el.genre;
  });

  let uniqueGenreObjects = [];

  for (let i = 0; i < allGenreObjects.length; i++) {
    let genreId = allGenreObjects[i]["_id"];

    let index = uniqueGenreObjects.findIndex(function (el) {
      return el._id == genreId;
    });

    if (index == -1) {
      uniqueGenreObjects.push(allGenreObjects[i]);
    }
  }

  res.json(uniqueGenreObjects);
});

//ye line server ko shuru krdeti hai
// ek port pr
server.listen(4000);

// //  http://localhost:3000/movies
