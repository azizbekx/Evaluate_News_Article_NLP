var path = require("path");
const express = require("express");

const bodyParser = require('body-parser')
const cors = require('cors');

const mockAPIResponse = require("./testRes.js");
const mainRequestAPI = require('./mainRequestAPI');



const app = express();

app.use(cors())
app.use(bodyParser.json())  // to use json

// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static("dist"));


app.get("/", function (req, res) {

  res.sendFile(path.resolve('dist/index.html'))
  // res.sendFile(path.resolve("src/client/views/index.html"));

});


app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});


//Post  in "/article"
app.post("/article", mainRequestAPI.handleResponse)

// designates what port the app will listen to for incoming requests

app.listen(5000, function () {
  console.log("Example app listening on port 5000!");
});



module.exports = app;



