//Andrew Ali A00452272

// App that saves data on a local server using express

//getting modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//sets port number to enviroment variable PORT or 4000 if undefined
const port = process.env.PORT || 4000;
let path = require("path");

app.use(bodyParser.urlencoded({}));
app.use(express.static(path.join(__dirname)));

//default array
let blog = ["", "", ""];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "A2.html"));
});

// GET method for the blog data
app.get("/data", (req, res) => {
  res.json(blog);
});

// POST method route = input1
app.post("/input1", (req, res) => {
  blog[0] = req.body.data;

  console.log(blog);
});

//  method route input2
app.post("/input2", (req, res) => {
  blog[1] = req.body.data;
  console.log(blog);
});

// method route input3
app.post("/input3", (req, res) => {
  blog[2] = req.body.data;
  console.log(blog);
});

//checks port number
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
