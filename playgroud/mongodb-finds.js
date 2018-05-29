const {MongoClient, ObjectID} = require("mongodb");


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`TODOS String count ${count}`);
  // }, (err) => {
  //   console.log('Error occurred retrieving the objects');
  // })

  db.collection('Todos').find({name: 'Srinadh', completed: true}).toArray().then(
    (result) => {console.log(JSON.stringify(result, undefined, 2))},
    (err) => {console.log("An error occured", err)});
  console.log("Closing the connection");
  db.close();
})
