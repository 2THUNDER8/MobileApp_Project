const blog = ["", "", ""];

const express = require("express"); // start express application
const server = express(); // define top level function
const port = 5500;

server.use(express.json()); // implement JSON recognition
server.use(express.urlencoded({ extended: true })); // implement incoming name:value pairs to be any type

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // allow any origin
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); // allow any method
  res.header("Access-Control-Allow-Headers", "Content-Type"); // accept only headers with this type
  next(); // middleware callback function required for processing
};
server.use(allowCrossDomain); // implement allowable domain characteristics

// Upon receiving a get at this url execute callback function
server.get("/loadall", function (req, res) {
  console.log(req.url);
  res.status(200).send(blog);
  res.sendFile(path.join(__dirname, "phase1.html"));
});

// Upon receiving a post at this url execute callback function
server.post("/w3review", function (req, res) {
  console.log(req.body.name);
  blog[0] = req.body.name;
  return res.status(200).send(blog);
});

server.post("/w", function (req, res) {
  console.log(req.body.name);
  blog[1] = req.body.name;
  return res.status(200).send(blog);
});

// Upon receiving a post at this url execute callback function
// server.post("/t2", function (req, res) {
//   console.log(req.body.name);
//   blog[1] = req.body.name;
//   return res.status(200).send(blog);
// });

// // Upon receiving a post at this url execute callback function
// server.post("/t3", function (req, res) {
//   console.log(req.body.name);
//   blog[2] = req.body.name;
//   return res.status(200).send(blog);
// });

server.listen(port, function () {
  console.log("Listening on port 5500");
});
