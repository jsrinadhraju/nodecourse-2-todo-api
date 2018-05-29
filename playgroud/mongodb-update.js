const {MongoClient, ObjectID} = require("mongodb");


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({name: "Srinadh"}).then((success) => {
  //   console.log(success);
  // });

  // db.collection('Todos').deleteOne({name: "William"}).then((success) => {
  //   console.log(success);
  // });

  db.collection('Todos').findOneAndUpdate(
    {name: "Srinadh"},
    { $set: {completed: true}},
    {returnOriginal: false}
  ).then((success) => {
    console.log(success);
  });
  console.log("Closing the connection");
  db.close();
})
