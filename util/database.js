const mongodb = require('mongodb');
const MongoClient =  mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect('mongodb+srv://luisdpizarro:Bge!!iu8D2-iAnW@cluster0-zxfjz.mongodb.net/practice?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
}

const getDb = () => {
  if(_db){
    return _db;
  }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

