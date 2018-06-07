var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./model/Todo");
var {User} = require("./model/User");

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    name: req.body.text,
    completed: req.body.completed,
    completedAt: req.body.completedAt
  });
  todo.save().then((doc) => {
    res.send(doc);
    res.status(200);
  }, (e) => {
    res.status(400);
    res.send(e);
  })
});

app.listen(3000, () => {
  console.log("Started on port 3000");
});
