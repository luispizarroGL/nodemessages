const getDb = require('../util/database').getDb;

class Message  {
  constructor(text){
    this.text = text;
    this.date = new Date();
  }

  save() {
    const db = getDb();
    return db.collection('messages').insertOne(this);
  }

  static findFromDate(date){
    const db = getDb();
    return db.collection('messages')
    .find({
      date: {$gte:new Date(date)}
    })
    .toArray()
    .then(products => {
      return products;
    })
    .catch(err =>{
      return err
    });
  }
}
module.exports = Message;
