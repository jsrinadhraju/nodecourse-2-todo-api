const {MongoClient, ObjectID} = require("mongodb");

var objeid = new ObjectID();
console.log(objeid);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server');
  db.collection('Todos').find();
  console.log("Closing the connection");
  db.close();
})
