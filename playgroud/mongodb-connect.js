const {MongoClient, ObjectID} = require("mongodb");

var objeid = new ObjectID();
console.log(objeid);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').insertOne({
  //   name: 'William',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("Unable to insert the record", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   //console.log(JSON.stringify(result.ops, undefinded, 2));
  // })

  db.collection('Users').insertOne({
    name: 'Employee 3',
    age: 33,
    ph: '234234232'
  }, (err, result) => {
    if (err) {
      console.log("Unable to insert the record", err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })
  console.log("Closing the connection");
  db.close();
})
